<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №5</title>
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="scripts/scripts_lab5.js"></script>
</head>
<body>
<h1>Лабораторная работа №5</h1>
<form>
    <table>
        <tr>
            <td>Формат ввода:<br></br>Если между графами нет пути - ставиться 0.<br>
                Между номерами вершин и между путями ставить один пробел.<br>Вершины обозначать цифрами.<br></br></td>
        </tr>
        <tr>
            <td>Пример ввода:<br></br>0 1 2 3 4<br>1 0 1 0 0<br>2 0 0 0 1<br>3 0 1 0 0<br>4 0 1 1 0<br></br></td>
        </tr>
        <tr>
            <td>Ввод графа:<br></td>
        </tr>
        <tr>
            <td><textarea type="text" id="matrix" value=""></textarea><br></br></td>
        </tr>
        <tr>
            <td><input type="button" value="Найти матрицу достижимости"  onclick="main()"><br></br></td>
        </tr>
        <tr>
            <td>Матрица достижимости:<br></td>
        </tr>
        <tr>
            <td><textarea type="text" id="mat_ans" value=""></textarea><br></br></td>
        </tr>
    </table>
</form>
</body>
</html>