<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №3</title>
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="scripts/scripts_lab3.js"></script>
</head>
<body>
<h1>Лабораторная работа №3</h1>
<form>
    <table>
        <tr>
            <td>Ввод отношения и множеств.<br></br></td>
        </tr>
        <tr>
            <td>Формат ввода отношения:<br>Пары элементов разделяют пробелы, элементы внутри пары записываются через запятую</br><br></br></td>
        </tr>
        <tr>
            <td>Пример:<br>a,2 b,2 c,1<br></td>
        </tr>
        <tr>
            <td><textarea type="text" id="pairs" value=""></textarea><br></br></td>
        </tr>
        <tr>
            <td>Формат ввода множеств:<br>Каждый элемент множества записывается через запятую</br><br></br></td>
        </tr>
        <tr>
            <td>Пример:<br>1,2,5,4,6<br></td>
        </tr>
        <tr>
            <td>1-ое множестов</td>
        </tr>
        <tr>
            <td><textarea type="text" id="mass_1" value=""></textarea><br></br></td>
        </tr>
        <tr>
            <td>2-ое множестов</td>
        </tr>
        <tr>
            <td><textarea type="text" id="mass_2" value=""></textarea><br></br></td>
        </tr>
        <tr>
            <td colspan="1"><input type="button" value="Определить является ли отношение функцией"  onclick="main()"><br></br></td>
        </tr>
        <tr>
            <td>Данное отношение - <input type="text" id="is_fun" value="" size="10"/></td>
        </tr>

    </table>
</form>
</body>
</html>
