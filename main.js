// Задание No1. Последнее значение цикла
// Какое последнее значение выведет этот код? Почему?
//     let i = 3;
// while (i) {
//     alert( i-- );
// }
//
// Последнее значение будет 1 , потому от цикл проверяет i на тру , а 0 уже будет равен false


// Задание No2.
//     Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
// возрастанию, то удвоить их; в противном случае заменить значение каждой
// переменной на противоположное. Вывести новые значения переменных A, B, C.
let num1 = 3;
let num2 = 2;
let num3 = 8;

if (num1 < num2 && num2 < num3 ){
    num1 *= 2;
    num2 *= 2;
    num3 *= 2;
}else{
    num1 *= -1;
    num2 *= -1;
    num3 *= -1;
}

console.log(num1);
console.log(num2);
console.log(num3);


// Задание No3.
//     Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по
// возрастанию или убыванию, то удвоить их; в противном случае заменить значение
// каждой переменной на противоположное. Вывести новые значения переменных A, B, C.

let num1 = 3;
let num2 = 2;
let num3 = 1;

if (num1 < num2 && num2 < num3 || num1 > num2 && num2 > num3  ){
    num1 *= 2;
    num2 *= 2;
    num3 *= 2;
}else{
    num1 *= -1;
    num2 *= -1;
    num3 *= -1;
}

console.log(num1);
console.log(num2);
console.log(num3);

// Задание No4.
//     На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних
// точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.

let a = 20;
let b = 26;
let c = 66;
let count = 0;

if (b > c){
    while (b > a){
        count++;
        b--;
    }
}else if (c > b){
    while (c > a){
        count++;
        c--;
    }
}
console.log( `Точек до А ${count}` );

// Задание No5.
//     Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом
// координат, то вывести 0. Если точка не совпадает с начало координат, но лежит на оси
// OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных
// осях, то вывести 3.

let x = 3;
let y  = 0;

if (y === 0 && x === 0){
    alert(0);
}else if (x > 0 && y === 0){
    alert(1);
}else if (y > 0 && x === 0){
    alert(2);
}else if (x > 0 && y > 0){
    alert(3);
}

// Задание No6.
//     Даны координаты точки, не лежащей на координатных осях OX и OY. Определить
// номер координатной четверти, в которой находится данная точка.

let x = 1;
let y  = -2;

if (x > 0 && y > 0){
    alert('I четверть');
}else if (x < 0 && y > 0 ){
    alert('II четверть');
}else if (x < 0 && y < 0 ){
    alert('III четверть');
}else if (x > 0 && y < 0 ){
    alert('IV четверть');
}

// Задание No8.
//     Дан номер года (положительное целое число). Определить количество дней в этом
// году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней.
//     Високосным считается год, делящийся на 4, за исключением тех годов, которые
// делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются
// високосными, а 1200 и 2000 — являются).

let year = 1996;

if (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0){
    alert('365');
}else{
    alert('366');
}


// Задание No9.
//     Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
// «нулевое число», «положительное нечетное число» и т. д.


let num = -21;

if (num % 2 === 0 && num > 0 ){
    alert('четное положительное число');
}else if (num % 2 !== 0 && num > 0 ){
    alert('не четное положительное число');
}else if (num < 0 ){
    num *= -1;
    if (num % 2 === 0 ){
        alert('четное отрицательное число');
    }else if (num % 2 !== 0  ){
        alert('не четное отрицательное число');
    }
}

// Задание No10.
//     Дано целое число, лежащее в диапазоне 1–999. Вывести его строку- описание вида
// «четное двузначное число», «нечетное трехзначное число» и т. д.

let num = 4;

if (num % 2 === 0 ){
    if (num < 10 ){
        alert('четное однозначное число')
    }else if (num > 10 && num < 100){
        alert('четное двухзначное число')
    }else if (num > 100){
        alert('четное трехзначное число')
    }
}else if (num % 2 !== 0 ){
    if (num < 10 ){
        alert('не четное однозначное число')
    }else if (num > 10 && num < 100){
        alert('не четное  двухзначное число')
    }else if (num > 100){
        alert('не четное  трехзначное число')
    }
}

// Задание No11. Какие значения выведет цикл while?
//     Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//     Оба цикла выводят alert с одинаковыми значениями или нет?
//     Префиксный вариант ++i:

//     let i = 0;
// while (++i < 5) alert( i );
//  Выведет значала 1 потом 2 , 3 , 4.  5 не выведет потому тчо условие 5 < 5 а инкремент проиходит в момент проверки (а 5 = 5 :) )


// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );
//  Выведет значала 1 потом 2 , 3 , 4, 5.  5 вывело потому ччто инкремент проиходит после проверки


// Задание No12. Какие значения выведет цикл for?
//  Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//  Оба цикла выведут alert с одинаковыми значениями или нет?

//  Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i );
// выведет сначала 0 потом 2,3,4 .   5 не выведет потому что условие не выполниться.

// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i );
// выведет сначала 0 потом 2,3,4 .   5 не выведет потому что условие не выполниться.


// Задание No13. Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.

for (i = 2; i <= 10; i++ ){
    if (i % 2 === 0){
        alert(i);
    }
}

// Задание No14. Замените for на while
//     Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
let i = 0;
while (i < 3){
    alert( `number ${i}!` );
    i++;
}

// Задание No15. Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если
// посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//     Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
//     либо не нажмёт кнопку Отмена (ESC).
//     Предполагается, что посетитель вводит только числа. Предусматривать обработку
// нечисловых строк в этой задаче необязательно.

while (true){
    let num = prompt('вВедите число больше 100');
    if (num < 100){
        let num = prompt('Введите еще раз число больше 100');
    }else if (num > 100 || num === false){
        break;
    }
}

// Задание No16. Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится,
//     кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число от 1 до n есть
// остаток.
//     Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
//     Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

nextCycle:
    for (let i = 2; i <= n; i++) { // Делаю цикл что б вывести все числа от и до
        for (let p = 2; p < i; p++) { // здест\ь цикл которые проверяет числа из предыдущего цикла могут ли они делиться на себя без остатка
            if (i % p === 0) continue nextCycle;
        }
        console.log(i) // простое число
    }


// Задание No17.
//     Вычислить среднее арифметическое 2-ух чисел, введенных пользователем.

let num1 = +prompt('Введите число 1');
let num2 = +prompt('Введите число 2');

let result = (num1 + num2) / 2;
console.log(result);


// Задание No18.
//     Напишите скрипт, который вычислит квадрат любого введённого числа.

let num = +prompt('Введите число ');

let result =  num * num;
console.log(result);

// Задание No19.
//     Примите от пользователя 3 числа. Выведите на экран разницу большего и меньшего из
// них.

let num1 = +prompt('Введите число 1');
let num2 = +prompt('Введите число 2');
let num3 = +prompt('Введите число 3');

let numMax = 0;
let numMin = 0;

//min
if (num1 < num2 && num1 < num3) {
    numMin = num1;
} else if (num2 < num1 && num2 < num3) {
    numMin = num2;
} else if (num3 < num1 && num3 < num2) {
    numMin = num3;
}
// max
if (num1 > num2 && num1 > num3) {
    numMax = num1;
} else if (num2 > num1 && num2 > num3) {
    numMax = num1;
} else if (num3 > num1 && num3 > num2) {
    numMax = num1;
}

console.log(numMax - numMin);

// Задание No20.
//     Напишите программу, проверяющую число, введенное с клавиатуры на четность.

let num = +prompt("Введите число");

if (num % 2 === 0){
    console.log('число четное');
}else if(num % 2 !== 0){
    console.log('число  не четное');
}


// Задание No21.
//     Дано натуральное число а (a<100). Напишите программу, выводящую на экран
// количество цифр в этом числе и сумму этих цифр

let num = 22;
let num1 = Math.floor(num / 10);
let num2 = num % 10;


if (num >= 10 ){
    let result = num1 + num2;
    console.log(`количество цифр 2 а сумма их = ${result}`);
}

// Задание No22.
//     Известно, что 1 дюйм равен 2.54 см. Разработать скрипт, переводящий дюймы в
// сантиметры и наоборот. Диалог с пользователем реализовать через браузер

const inch = 2.54;

let sm = +prompt('введите сантиметры');
let result = sm * inch;

alert(`Количество дюймов в ${sm} cм  равно ${result}`);

// Задание No23. Найти сумму или произведение цифр трехзначного числа
// Пользователь вводит через prompt трёхзначное число. Проверить трехзначное число
// на четность и найти сумму его цифр, если число четное, или произведение его цифр,
//     если число нечетное.

let num = +prompt('введите трехзнаное число');

let num1 = Math.floor(num/ 100) ; // 1
let num2 = (Math.floor(num / 10)) % 10;  // 14
let num3 = num % 10; // 5
if (num % 2 === 0){
    let result = num1 + num2 + num3;
    console.log(result);
}else if (num % 2 !== 0){
    let result = num1 * num2 * num3;
    console.log(result);
}

// Задание No24. Определить существование треугольника по трем сторонам
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две
// стороны просто <лягут> на третью и треугольника не получится.
//     Пользователь вводит поочерёдно через prompt длины трех сторон.
//     Напишите код, который должен определять, может ли существовать треугольник при
// таких длинах. Т. е. нужно сравнить суммы двух любых сторон с оставшейся третьей
// стороной. Чтобы треугольник существовал, сумма всегда должна быть больше
// отдельной стороны.

let side1 = 0;
let side2 = 2;
let side3 = 2;

if ((side1 + side2) > side3 && side3 > 0){
    console.log('Да будет существовать');
}else if ((side1 + side3) > side2 && side2 > 0){
    console.log('Да будет существовать');
}else if ((side2 + side3) > side1 && side1 > 0  ){
    console.log('Да будет существовать');
}else {
    console.log('Нет будет существовать');
}

// Задание No25. Принадлежность точки окружности
// Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10) с центром в начале
// координат.
//     Напишите код, который будет выводить сообщение о том, лежит ли данная точка
// внутри окружности или за её пределами. Для извлечения квадратного корня из числа z
// вам понадобится метод Math.sqrt(z).
//     Например: let a = Math.sqrt(4); // a=2

let x = 4;
let y = 9;
let r = 10;

if (r > x && r > y){
    console.log('Точка принадлежит кругу');
}else {
    console.log('Точка не принадлежит кругу')
}

// Задание No26. Объекты
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//     • Создайте пустой объект user.
// • Добавьте свойство name со значением John.
// • Добавьте свойство surname со значением Smith.
// • Измените значение свойства name на Pete.
// • Удалите свойство name из объекта.


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Задание No27. Объекты-константы
// Можно ли изменить объект, объявленный с помощью const?
// const user = {
//     name: "John"
// };
// user.name = "Pete"; // это будет работать?

// Да на свойства const не распрастраняеться

// Задание No28. Сумма свойств объекта
// Есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной
// sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);


// Задание No29. Бесконечный цикл по ошибке
// Этот цикл – бесконечный. Он никогда не завершится, почему?
//     let i = 0;
//
// while (i !== 10) {   // потому что в  java script без функции округления здесь никогда не будет целого числа 10.
//     i += 0.2;
// }
//


// Задание No7.
//     Даны целочисленные координаты трех вершин прямоугольника, стороны которого
// параллельны координатным осям. Найти координаты его четвертой вершины.

let x1 = 3;
let x2 = -4;
let x3 = -4;

let y1 = 2;
let y2 = 2;
let y3 = -2;

let x4 = 0;
let y4 = 0;


if (x1 === x2) {
    x4 = x3;
}else if (x2 === x3) {
    x4 = x1;
}else x4 = x2;

if (y1 === y2) {
    y4 = y3;
}else if (y2 === y3){
    y4 = y1;
}else y4 = y2;

console.log(x4,y4);