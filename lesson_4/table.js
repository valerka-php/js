// Задание No3. Поиск элементов
// Вот документ с таблицей и формой. Как найти?...
// • Таблицу с id="age-table".
// • Все элементы label внутри этой таблицы (их три).
// • Первый td в этой таблице (со словом «Age»).
// • Форму form с именем name="search".
// • Первый input в этой форме.
// • Последний input в этой форме.
//     Используйте код файла table.html и браузерные инструменты разработчика:

// 1. Таблица с `id="age-table"`.
let table = document.getElementById('age-table')

// 2. Все label в этой таблице
console.log(table.getElementsByTagName('label'))
// или
console.log(document.querySelectorAll('#age-table label'))

// 3. Первый td в этой таблице
console.log(table.querySelector('td'))

// 4. Форма с name="search"
// предполагаем, что есть только один элемент с таким name в документе
let form = document.getElementsByName('search')[0]
// или, именно форма:
console.log(document.querySelector('form[name="search"]'))

// 5. Первый input в этой форме
console.log(form.getElementsByTagName('input')[0])

// 6. Последний input в этой форме
let inputs = form.querySelectorAll('input')
console.log(inputs[inputs.length-1])