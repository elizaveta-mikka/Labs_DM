let mass_1, mass_2, result;

//Поиск повторяющихся элементов

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

//Удаление случайных пробелов в конце страницы

function delete_space(str) {
    if (str[str.length-1] == ' ') {
        while (str[str.length-1] == ' ') {
            str = str.substring(0, str.length-1);
        }
    }
    return str;
}

//Удаление повторяющихся элементов

function delete_elements(str, str1, mass) {
    mass = str.split(' ');
    str += ' ';
    str1 = '';
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

//Объединение
function operation_1(str1, str2, str3, mass)
{
    str3 = str1 + ' ' + str2;
    mass = str3.split(' ');
    for (let i = 0; i < mass.length; i++) {
        if (count_element(mass, mass[i])==1) {
            result += mass[i] + ' ';
        }
        else{
            mass[i] = null;
        }
    }
}

//Пересечение
function operation_2(str1, str2, mass1, mass2)
{
    mass1 = str1.split(' ');
    mass2 = str2.split(' ');
    for (let i = 0; i < mass1.length; i++) {
        if (count_element(mass2, mass1[i]) >= 1) {
            result += mass1[i] + ' ';
        }
    }
}

//Дополнение A/B
function operation_3(str1, str2, mass1, mass2)
{
    mass1 = str1.split(' ');
    mass2 = str2.split(' ');
    for (let i = 0; i < mass1.length; i++) {
        if (count_element(mass2, mass1[i]) == 0) {
            result += mass1[i] + ' ';
        }
    }
}

//Дополнение B/A
function operation_4(str1, str2, mass1, mass2)
{
    mass1 = str1.split(' ');
    mass2 = str2.split(' ');
    for (let i = 0; i < mass2.length; i++) {
        if (count_element(mass1, mass2[i]) == 0) {
            result += mass2[i] + ' ';
        }
    }
}

//Симметрическая разность
function operation_5(str1, str2, mass1, mass2)
{
    mass1 = str1.split(' ');
    mass2 = str2.split(' ');
    for (let i = 0; i < mass1.length; i++) {
        if (count_element(mass2,mass1[i]) == 0) {
            result += mass1[i] + ' ';
        }
    }
    for (let i = 0; i < mass2.length; i++) {
        if (count_element(mass1,mass2[i]) == 0) {
            result += mass2[i] + ' ';
        }
    }
}


//Проверка элементов множества
function validate(str, p) {
    let mass = false
    if(str.length>0)
    {
        mass = str.split(' ')
        for (let i = 0; i < mass.length; i++)
        {
            if ((mass[i][0]<'0')||(mass[i][0]>'9')||(mass[i][0] == null)) {
                alert('Ошибка при вводе множества: '+ str +' в элементе '+ mass[i]);
                mass= false;
            }
            if ((mass[i][1]<'a')||(mass[i][1]>'z')||(mass[i][1] == null)) {
                alert('Ошибка при вводе множества: '+ str +' в элементе '+ mass[i]);
                mass = false;
            }
            if (((mass[i][2]<'0')||(mass[i][2]>'9'))||(((mass[i][2]>='1')&(mass[i][2]<='9'))&(mass[i][2]%2 != 0))||(mass[i][2] == null)) {
                alert('Ошибка при вводе множества: '+ str +' в элементе '+ mass[i]);
                mass = false;
            }
            if (((mass[i][3]<'0')||(mass[i][3]>'9'))||(((mass[i][3]>='0')&(mass[i][3]<='9'))&(mass[i][3]%2 != 0))||(mass[i][3] == null)) {
                alert('Ошибка при вводе множества: '+ str +' в элементе '+ mass[i]);
                mass = false;
            }
        }
    }
    else
        alert(p+'-ое множество не должно быть пустым');
    return mass;
}

function massivs() {
    let a = document.getElementById('mass1');
    let b = document.getElementById('mass2');
    a.value = delete_space(a.value);
    b.value = delete_space(b.value);
    mass_1 = validate(a.value, 1);
    mass_2 = validate(b.value, 2);
    a.value = delete_elements(a.value);
    b.value = delete_elements(b.value);
    let o = document.getElementById('operations').value;
    result = '';
    if ((o == 1)&(mass_1 != false)&(mass_2 != false))
        operation_1(a.value, b.value);
    if ((o == 2)&(mass_1 != false)&(mass_2 != false))
        operation_2(a.value, b.value);
    if ((o == 3)&(mass_1 != false)&(mass_2 != false))
        operation_3(a.value, b.value);
    if ((o == 4)&(mass_1 != false)&(mass_2 != false))
        operation_4(a.value, b.value);
    if ((o == 5)&(mass_1 != false)&(mass_2 != false))
        operation_5(a.value, b.value);
    document.getElementById('result').value = result;
}