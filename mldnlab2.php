<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №2</title>
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="scripts_lab2.js"></script>
</head>
<body>
<h1>Лабораторная работа №2</h1>
<form>
    <table>
        <tr>
            <td>Ввод пар элементов.<br></br></td>
        </tr>
        <tr>
            <td>Формат ввода:<br>Пары элементов разделяют пробелы, элементы внутри пары записываются через запятую</br><br></br></td>
        </tr>
        <tr>
            <td>Пример:<br>1,2 2,3 3,3 3,4 2,4</br><br></br></td>
        </tr>
        <tr>
            <td><textarea type="text" id="pairs_el" value=""></textarea></td>
        </tr>
        <tr>
            <td><input type="button" value="Определить свойства" onclick="properties()"></td>
        </tr>
        <tr>
            <td>Свойства отношения.</td>
        </tr>
        <tr>
            <td>Рефлективность: <input type="text" id="ref_prop" value="" size="10"/></td>
        </tr>
        <tr>
            <td>Симметричность: <input type="text" id="sim_prop" value="" size="10"/></td>
        </tr>
        <tr>
            <td>Антисимметричность: <input type="text" id="anti_prop" value="" size="10"/></td>
        </tr>
        <tr>
            <td>Транзитивность: <input type="text" id="tran_prop" value="" size="10"/></td>
        </tr>
    </table>
</form>
</body>
</html>