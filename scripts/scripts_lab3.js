let mass_1, mass_2, mass_p, mass_p_1;


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
Проверка корректности введённых множеств
 */

function validate_1(str, p) {
    let mass = false;
    if (str.length>0) {
        mass = str.split(',');
        for (let i = 0; i < mass.length; i++) {
            if ((mass[i] == '')||(mass[i] == ' ')) {
                alert('Ошибка при вводе множества ' + p + ': введите ' + (i+1)+ ' элемент');
                mass= false;
                break;
            }
        }
    }
    else
        alert('Введите ' + p +'-ое множество');
    return mass;
}


/*
Проверка корректности введённых пар отношения
 */

function validate_2(str) {
    let mass = false;
    if(str.length>0) {
        mass = str.split(' ');
        for (let i = 0; i < mass.length; i++) {
            let mass_1 = mass[i].split(',');
            for (let j = 0; j<2; j++) {
                if ((mass_1[j] == '')||(mass_1[j] == ' ')) {
                    alert('Ошибка при вводе: пара '+ (i+1) +', элемент '+ (j+1));
                    mass = false;
                    break;
                }
            }
            if (mass==false)
                break;
            mass_1 = "";
        }
    }
    else
        alert('Нет пар элементов');
    return mass;
}


/*
Функция считает сколько раз в строке встречается тот или иной элемент
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
Удаление повторяющихся пар элементов
 */

function delete_elements_1(str) {
    let mass = str.split(' ');
    str += ' ';
    let str1 = '';
    let k = 0;
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
    mass_p = str1.split(' ');
    return str1;
}


/*
Удаление повторяющихся элементов множества
 */

function delete_elements_2(str, p) {
    let mass = str.split(',');
    let k = 0;
    str = '';
    for (let i = 0; i<mass.length; i++) {
        if ((count_element(mass, mass[i]) > 1)&(mass[i] != null)) {
            let i_1 = i;
            while (i_1 != mass.length) {
                mass[i_1] = mass[i_1+1];
                i_1++;
                if ((i_1+1) == mass.length) {
                    mass[i_1] = null;
                    i_1++;
                    k++;
                }
            }
        }
    }
    mass.length = mass.length - k;
    for (let i = 0; i < (mass.length-1); i++) {
        str += mass[i] + ',';
    }
    str += mass[mass.length-1];
    str = delete_space(str);
    if (p==1)
        mass_1 = mass;
    else
        mass_2 = mass;
    return str;
}


/*
Каждый элемент пар элемнт записывается в двухмерный массив
 */

function new_mass()
{
    mass_p_1 = new Array();
    for(let i=0; i<mass_p.length; i++){
        mass_p_1[i] = new Array();
        let mass = mass_p[i].split(',');
        for(let j=0; j<2; j++){
            mass_p_1[i][j] = mass[j];
        }
    }
}


/*
Функция определяющая является ли отношение функцией
 */

function fun_is() {
    let k = 0;
    for (let i = 0; i<mass_p.length; i++) {
        for (let j = 0; j < mass_1. length; j++) {
            if (mass_p_1[i][0] == mass_1[j]) {
                mass_p_1[i][0] = '*';
                mass_1[j] = '*';
            }
        }
    }
    let x = 0;
    while (x != mass_1.length) {
        if (mass_1[x] != '*')
            break;
        x++;
    }
    if (x == mass_1.length)
        k++;
    x = 0;
    while (x != mass_p.length) {
        if (mass_p_1[x][0] != '*')
            break;
        x++;
    }
    if (x == mass_p.length)
        k++;
    if (k==2) {
        for (let i =0; i<mass_p.length; i++) {
            for (let j = 0; j < mass_2. length; j++) {
                if (mass_p_1[i][1] == mass_2[j])
                    mass_p_1[i][1] = '*';
            }
        }
    }
    k = 0;
    for (let i =0; i<mass_p.length; i++) {
        if ((mass_p_1[i][0] == '*')&(mass_p_1[i][1] == '*'))
            k++;
    }
    if (k == mass_p.length)
        document.getElementById('is_fun').value = 'функция';
    else
        document.getElementById('is_fun').value = 'не функция';
}


/*
Основная функция
 */

function main() {
    let p = document.getElementById('pairs');
    let a = document.getElementById('mass_1');
    let b = document.getElementById('mass_2');
    a.value = delete_space(a.value);
    b.value = delete_space(b.value);
    p.value = delete_space(p.value);
    mass_1 = validate_1(a.value, 1);
    mass_2 = validate_1(b.value, 2);
    mass_p = validate_2(p.value);
    if ((mass_1 != false)&(mass_2 != false)&(mass_p != false)) {
        p.value = delete_elements_1(p.value);
        a.value = delete_elements_2(a.value, 1);
        b.value = delete_elements_2(b.value, 2);
        new_mass();
        fun_is();
    }
}