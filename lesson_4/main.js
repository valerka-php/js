// Задание No1. Дочерние элементы в DOM
// Для страницы:
//     <html>
//     <body>
//     <div>Пользователи:</div>
//     <ul>
//         <li>Джон</li>
//         <li>Пит</li>
//     </ul>
//     </body>
//     </html>
// Как получить:
//     • Напишите код, который получит элемент <div>?
// • Напишите код, который получит <ul>?
// • Напишите код, который получит второй <li> (с именем Пит)?

console.log(document.body.firstElementChild)
// или
console.log(document.body.children[0])


console.log(document.body.lastElementChild)
// или
console.log( document.body.children[1])

console.log(document.body.lastElementChild.lastElementChild)
// получаем <ul>, и его последнего ребёнка
document.body.lastElementChild.lastElementChild

// Задание No2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
//     Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
//     используя код:
// // в переменной td находится DOM-элемент для тега <td>
//     td.style.backgroundColor = 'red';

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}


// Задание No4. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
//     <li>Привет</li>
//     <li>Мир</li>
// </ol>
// <script>
//     function clear(elem) {
//     /* ваш код */
// }
//     clear(elem); // очищает список
// </script>

function clear(elem) {
    elem.innerHTML = '';
}

clear(elem);

// Задание No5. Создайте список
// Напишите интерфейс для создания списка.
//     Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую
// строку.
//     Все элементы должны создаваться динамически.
//     Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный
// текст.

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

// Задание No6. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// <ul id="ul">
//     <li id="one">1</li>
//     <li id="two">4</li>
// </ul>

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


