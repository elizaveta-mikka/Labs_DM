<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №1</title>
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="scripts/scripts_lab1.js"></script>
</head>
<body>
<h1>Лабораторная работа №1</h1>
<form>
    <table>
        <tr>
            <td>Первый множество</td>
            <td><input type="text" id="mass1" value="" size="100"/></td>
        </tr>
        <tr>
            <td>Второй множество</td>
            <td><input type="text" id="mass2" value="" size="100"/></td>
        </tr>
        <tr>
            <td>Операция</td>
            <td><select id="operations">
                    <option value="1">Объединение</option>
                    <option value="2">Пересечение</option>
                    <option value="3">Дополнение A/B</option>
                    <option value="4">Дополнение B/A</option>
                    <option value="5">Сумметрическая разность</option>
                </select></td>
        </tr>
        <tr>
            <td colspan="2"><input type="button" value="Сделать расчёт" onclick="massivs()"></td>
        </tr>
        <tr>
            <td colspan="2">Результат</td>
        </tr>
        <tr>
            <td><textarea type="text" id="result" value=""></textarea></td>
        </tr>
    </table>
</form>
</body>
</html>
