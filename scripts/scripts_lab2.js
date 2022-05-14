let mass_ch, mass_a;


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
Удаление повторяющихся элементов
 */
function delete_elements(str) {
    let mass = str.split(' ');
    str += ' ';
    let str1 = '';
    for (let i=0; i < mass.length; i++) {
        if ((count_element(mass, mass[i]) > 1)&(mass[i] != null)) {
            str1 += mass[i] + ' ';
            let str_search = mass[i];
            for (let j = 0; j < mass.length; j++){
                if (mass[j] == str_search) {
                    mass[j] = null;
                }
            }
        }
        else
        if (mass[i] != null)
            str1 += mass[i] + ' ';
    }
    str1 = delete_space(str1);
    return str1;

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
Проверка корректности ведён пар
 */
function validate(str) {
    let mass = false;
    if (str.length>0)
    {
        mass = str.split(' ');
        for (let i = 0; i < mass.length; i++)
        {
            let mass_1 = mass[i].split(',');
            for (let j = 0; j<2; j++) {
                let num = Number(mass_1[j]);
                let str = String(num);
                if ((str == "NaN")||(mass_1[j] == '')) {
                    alert('Ошибка при вводе: пара '+ (i+1) +' элемент '+ (j+1));
                    mass= false;
                }
            }
            mass_1 = "";
        }
    }
    else
        alert('Нет пар элементов');
    return mass;
}


/*
Функция, которая записывает все присутствующие в парах числа в порядке возрастания
 */
function numbers()
{
    let x = 1;
    mass_ch = mass_a[0].split(',');
    mass_ch[1] = null;
    for (let i = 0; i <mass_a.length; i++)
    {
        let mass_1 = mass_a[i].split(',');
        for (let j = 0; j<2; j++) {
            if (count_element(mass_ch, mass_1[j]) == 0) {
                mass_ch[x] = mass_1[j];
                x++;
            }
        }
        mass_1 = "";
    }
    let i_i = 0;
    for (let i = i_i; i<mass_ch.length; i++) {
        let min = mass_ch[i];
        for (let j = i_i; j<mass_ch.length; j++) {
            if (mass_ch[i]>mass_ch[j]) {
                let a = mass_ch[i];
                mass_ch[i] = mass_ch[j];
                mass_ch[j] = a;
            }
        }
        i_i++;
    }
}


/*
Рефлективность
 */
function reflect() {
    let k = 0;
    let k_f = mass_ch.length;
    for (let i=0; i<mass_ch.length; i++) {
        let pt = mass_ch[i] + ',' + mass_ch[i];
        for (let j = 0; j<mass_a.length; j++) {
            if (mass_a[j] == pt) {
                k++;
            }
        }
    }
    if (k == k_f) {
        document.getElementById('ref_prop').value = 'есть';
    }
    else
    {
        document.getElementById('ref_prop').value = 'нет';
    }
}


/*
Симметричность
 */
function simmet() {
    let k = 0;
    for (let i = 0; i<mass_a.length; i++) {
        let mass = mass_a[i].split(',');
        let pt = mass[1] + ',' + mass[0];
        for (let j = 0; j<mass_a.length; j++) {
            if (pt == mass_a[j]) {
                k++;
            }
        }
    }
    if (k == mass_a.length) {
        document.getElementById('sim_prop').value = 'есть';
    }
    else
    {
        document.getElementById('sim_prop').value = 'нет';
    }
}


/*
Антисимметричность
 */
function antisim () {
    let a = 1;
    for (let i = 0; i< mass_a.length; i++) {
        let mass = mass_a[i].split(',');
        let elem = mass[1] + ',' + mass[0];
        for (let j = 0; j<mass_a.length; j++) {
            if (mass_a[j] == elem) {
                a = 0;
                break;
            }
        }
        if (mass[0] == mass[1])
            a = 1;
        if (a == 0)
            break;
        mass = "";
    }
    let x = 0;
    let p = 0;
    while (x != mass_a.length) {
        let mass = mass_a[x].split(',');
        if (mass[1] == mass[0])
            p++;
        x++;
    }
    if (x == p)
        a = 0;
    if (a == 0)
        document.getElementById('anti_prop').value = 'нет';
    if (a == 1)
        document.getElementById('anti_prop').value = 'есть';
}

/*
Транзитивность
 */
function transit () {
    let t = 0;
    let k = 0;
    for (let i = 0; i<mass_a.length; i++) {
        let mass = mass_a[i].split(',');
        for (let j = 0; j<mass_a.length; j++) {
            let mass_1 = mass_a[j].split(',');
            if ((mass_1[0] == mass[1])&(mass[0] != mass[1])&(mass[0] != mass_1[1])&(mass_1[1] != mass_1[0])) {
                k++;
                let elem = mass[0] + ',' + mass_1[1];
                for (let x = 0; x<mass_a.length; x++) {
                    if (mass_a[x] == elem)
                        t++;
                }
            }
        }
    }
    let x = 0;
    let p = 0;
    while (x != mass_a.length) {
        let mass = mass_a[x].split(',');
        if (mass[1] == mass[0])
            p++;
        x++;
    }
    if (x == p)
        document.getElementById('tran_prop').value = 'нет';
    else
    if ((k==t)&(k!=0))
        document.getElementById('tran_prop').value = 'есть';
    else
        document.getElementById('tran_prop').value = 'нет';

}

/*
 */
function properties() {
    let a = document.getElementById('pairs_el');
    a.value = delete_space(a.value);
    mass_a = validate(a.value);
    a.value = delete_elements(a.value);
    if (mass_a != false) {
        numbers();
        reflect();
        simmet();
        antisim();
        transit();
    }
}