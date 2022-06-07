<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №4</title>
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="scripts/scripts_lab4.js"></script>
</head>
<body>
<h1>Лабораторная работа №4</h1>
<form>
    <table>
        <tr>
            <td>Формат ввода:<br></br>Если между графами нет пути - ставиться 0.<br>
                Заполняется только часть матрицы ниже главной диагонали.<br>На главной диагонали ставяться нули.<br>
                Между номерами вершин и между путями ставить один пробел.<br>Вершины обозначать цифрами.<br></br></td>
        </tr>
        <tr>
            <td>Пример ввода:<br></br>0 1 2 3 4 5<br>1 0<br>2 0 0 <br>3 0 0 0<br>4 0 0 0 0<br>5 0 0 0 0 0<br></br></td>
        </tr>
        <tr>
            <td>Ввод графа:<br></td>
        </tr>
        <tr>
            <td><textarea type="text" id="matrix" value=""></textarea><br></br></td>
        </tr>
        <tr>
            <td><input type="button" value="Найти крайчайший путь из первой до последней вершины"  onclick="main()"><br></br></td>
        </tr>
        <tr>
            <td>Крайчайший путь равен <input type="text" id="k" value="" size="8"/></td>
        </tr>
        <tr>
            <td>Крайчайшая последовательность равна <input type="text" id="k_k" value="" size="20"/></td>
        </tr>
    </table>
</form>
</body>
</html>