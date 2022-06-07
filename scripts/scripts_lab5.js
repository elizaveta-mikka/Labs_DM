let n, v, mass, mass_d;


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
Проверка введенной матрицы
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
                if (mass[x] == ' ')
                    k++;
                x++;
            }
            if (mass.length-1 != n_1)
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
Строка с матрицей преобразуется в двухмерный массив
 */
function new_mass(str)
{
    let m = str.split('\n');
    mass = new Array();
    for(let i=1; i<=n; i++){
        mass[i-1] = new Array();
        let m_m = m[i].split(' ');
        for(let j=1; j<=n; j++){
            let num = Number(m_m[j]);
            mass[i-1][j-1] = num;
        }
    }

}


/*
Функция, формирующая матрицу достижимости
 */
function matrix_d()
{
    mass_d = mass;
    for(let k = 0; k <n; k++)
    {
        for(let i = 0; i <n; i++)
        {
            for(let j = 0; j <n; j++)
            {
                mass_d[i][j] = mass_d[i][j] || (mass_d[i][k] && mass_d[k][j]);
            }
        }
    }
    for(let i = 0; i <n; i++) {
        for (let j = 0; j < n; j++) {
            document.getElementById('mat_ans').value += mass_d[i][j]+ ' ';
        }
        document.getElementById('mat_ans').value += '\n';
    }
}


/*
Главная функция
 */
function main()
{
    document.getElementById('mat_ans').value = '';
    let m = document.getElementById('matrix');
    validate(m.value);
    if (v != false)
    {
        new_mass(m.value);
        matrix_d();
    }
}