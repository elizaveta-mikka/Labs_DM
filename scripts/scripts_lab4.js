let n, mass_m, v, mass_m_1, list, par, par_1;


/*
Функция счиатет сколько раз в строке встречается тот или иной элемент
 */

function count_element(mass, element)
{
    let count = 0;
    for (let i = 0; i < mass.length; i++)
    {
        if (mass[i] == element)
            count++;
    }
    return count;

}


/*
Удаление случайных пробелов в конце строки
 */

function delete_space(str) {
    if (str[str.length-1] == ' ') {
        while (str[str.length-1] == ' ') {
            str = str.substring(0, str.length-1);
        }
    }
    return str;
}


/*
Проверка корректности ввода
 */
function validate(str)
{
    mass_m = str.split('\n');
    let n_1 = 0;
    let n_2 = 0;
    let el_1 = 0;
    for (let i = 0; i<mass_m.length; i++)
    {
        mass_m[i] = delete_space(mass_m[i]);
        let mass = mass_m[i].split(' ');
        if (i == 0)
        {
            for (let j = 0; j<mass.length; j++)
            {
                if (mass[j] != j)
                {
                    alert('Ошибка при вводе нумерации вершин по горизонатали');
                    mass = false;
                    break;
                }
                if (j+1 == mass.length)
                {
                    n_1 = j;
                }
            }
        }
        else
        {
            if ((mass[0]-1) == el_1)
            {
                n_2 ++;
                el_1 = mass[0];
            }
            else
            {
                alert('Ошибка при вводе нумерации вершин по вертикали');
                mass = false;
                break;
            }
            let x = 0;
            let k = 0;
            while (x != mass.length)
            {
                let num = Number(mass[x]);
                let str = String(num);
                if ((mass[x] != ' ')&&(str == "NaN"))
                {
                    alert('Ошибка при вводе длины путя. Строка ' + i +', число '+ x);
                    mass = false;
                    break;
                }
                x++;
            }
            if (i != (x-1))
            {
                alert('В строке ' + i + ' неверно проставлены разделительные пробелы.');
                mass = false;
            }
        }
        if (mass == false)
        {
            alert('Кройчайший путь не может быть определён.');
            v = false;
        }
    }
    if (n_1 != n_2)
    {
        alert('Вершины по горизонтали и по вертикали не совпадают.');
        v = false;
    }
    else
        n = n_1;
}


/*
Матрица записывается в двухмерный массив
 */
function new_mass()
{
    mass_m_1 = new Array();
    for(let i=0; i<mass_m.length; i++){
        mass_m_1[i] = new Array();
        let mass = mass_m[i].split(' ');
        for(let j=0; j<mass_m.length; j++){
            mass_m_1[i][j] = mass[j];
        }
    }
}


/*
Функция записывает все связанные вершин в массив в виде (вершина 1)(вершина 2)
 */
function lit_path_1()
{
    list = new Array();
    let l = 0;
    let mass = mass_m_1;
    for (let i = 1; i<=n; i++)
    {
        for (let j = 2; j<=n; j++)
        {
            if ((mass[j][i] != '0') && (mass[j][i] != undefined))
            {
                list[l] = i + '' + j;
                l++;
                if ((i != '1') && (j != n + ''))
                {
                    list[l] = j + '' + i;
                    l++;
                }
            }
        }

    }
}

function lit_path_2()
{
    par = new Array();
    let p = 0;
    for (let i = 0; i<list.length; i++)
    {
        par[p] = [];
        let f = 0;
        let s = 0;
        par[p] += list[i] + ' ';
        f = list[i][1];
        s = list[i][0];
        for (let j = 0; j <list.length; j++)
        {
            if ((list[j] != list[i]) && (list[j] != f + s) && (list[j][0] == f))
            {
                par[p] += list[j] + ' ';
                f = list[j][1];
                s = list[j][0];
            }
        }
        par[p] = delete_space(par[p]);
        p++;
    }
}

function lit_path_3()
{
    let a = [];
    let c = [];
    let c_i = 0;
    let t = 0;
    let len = par.length;
    for (let i = 0; i<len; i++)
    {
        if (par[i][0] != "1")
        {
            a = par[i][1];
            for (let j = 0; j<len; j++)
            {
                par[i] += ' ';
                par[j] += ' ';
                let b = par[i].split(' ');
                let b_1 = par[j].split(' ');
                if ((par[j][0] == a) && (b[1] != b_1[0]))
                {
                    let c = par[j];
                    par[par.length] = b[0] + ' ' + c;

                }
            }
        }
    }
    for (let i = 0; i<par.length; i++)
    {
        if (par[i][0] == "1")
        {
            a = par[i][1];
            for (let j = 0; j<par.length; j++)
            {
                par[i] += ' ';
                par[j] += ' ';
                let b = par[i].split(' ');
                let b_1 = par[j].split(' ');
                if ((par[j][0] == a) && (b[1] != b_1[0]))
                {
                    let c = par[j];
                    par[j] = b[0] + ' ' + c;

                }
            }
        }
    }
    for (let i = 0; i<par.length; i++)
    {
        par[i] = delete_space(par[i]);
        let x = 0;
        let k = 0;
        while (x != par[i].length)
        {
            if (par[i][x] == ' ')
                k++;
            x++;
        }
        if ((k == 0) && ((par[i][0] != "1") && (par[i][par[i].length-1] != n + '')) )
        {
            for (let j = i; j<par.length; j++)
            {
                par[j] = par[j+1];
            }
            par.length--;
            i--;
        }
        else
        if ((par[i][0] != "1") || (par[i][par[i].length-1] != n + ''))
        {
            for (let j = i; j<par.length; j++)
            {
                par[j] = par[j+1];
            }
            par.length--;
            i--;
        }
    }
}


/*
Преобразовывает последовательность связанных вершин в длину из начальной вершины в конечную
 */
function count_path()
{
    par_1 = new Array();
    for (let i =0; i<par.length; i++)
    {
        par_1[i] = par[i];
    }
    for (let i = 0; i<par.length; i++)
    {
        let ch = 0;
        let p_p  = par[i].split(' ');
        for (let j = 0; j<p_p.length; j++)
        {
            let a_1 = Number(p_p[j][0]);
            let a_2 = Number(p_p[j][1]);
            if (a_1 >= a_2)
            {
                ch += Number(mass_m_1[a_1][a_2]);
            }
            else
                ch += Number(mass_m_1[a_2][a_1]);
        }
        par[i] = ch;
    }
}


/*
Функция ищет минимальную длину
 */
function find_lit_path()
{
    let min = 1000;
    let min_i = 0;
    for (let i = 0; i<par.length; i++)
    {
        if (par[i] < min)
        {
            min = par[i];
            min_i = i;
        }
    }
    document.getElementById('k').value = min;
    document.getElementById('k_k').value = par_1[min_i];
    if (min == 1000)
        document.getElementById('k').value = 'путей нет';
}
/*
Главная функция
 */
function main()
{
    let m = document.getElementById('matrix');
    v = validate(m.value);
    if (v != false)
    {
        new_mass();
        lit_path_1();
        lit_path_2();
        lit_path_3();
        count_path();
        find_lit_path();
    }
}