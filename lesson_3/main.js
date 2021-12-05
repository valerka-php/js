// Задание No1. Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
//     иначе false.

let obj = {
    name: ' vasya',
};

function checkEmpty(obj){
    for (let k in obj){ // ecли выполниться цикл то в обьекте есть что либо , и вернется false
        return false;
    }
    return true;
}

console.log(checkEmpty(obj));

// Задание No2. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
// объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
// напрямую изменять объект.
//     P.S. Используйте typeof для проверки, что значение свойства числовое.

let obj = {
    name: 'vasya',
    age: 25,
    likeNum: 7,
    surname: 'qwerty',
};

function multiplyNumeric(obj) {
    for (let k in obj){
        if (typeof obj[k] === "number"){
            obj[k] *= 2;
            console.log(obj);
        }

    }
}

multiplyNumeric(obj);

// Задание No3. Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения
// до тех пор, пока посетитель его не введёт.
//     функция должна возвращать числовое значение.
//     Также надо разрешить пользователю остановить процесс ввода, отправив пустую
// строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber(){
    let x = true;  // условие цикла
    while (x === true){
        let num = +prompt('Введите число 79');
        if (typeof num === "number" && num === 79){
            x = false;
            return console.log(num);  // вернет цифру 79
            // return console.log(typeof(num));   - выведет тип числа number;
        }
    }
}

readNumber();

// Задание No4. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
// 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с
// плавающей точкой от min до max (но не включая max).
// Пример работы функции:
//     alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// здесь будет всегда только однозначое число , не совсем понял как в js сгенерировать двухзначное .
function rand(min,max){
    let x = 1;
    while (x){
        let num = (Math.random(min, max) * 10); // здесь случайное число от 0 до 1 генерируеться , и умножаеться на 10 что бы знак сместить на 1 в право и получить число больше 1.
        if (num >= min && num < max){
            x = 0;
            return num;
        }
    }
}

for (i = 0; i < 10; i++){
    console.log(rand(5,9));
}

// Задание No5. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое
// (integer) число от min до max (включительно).
//     Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//     Пример работы функции:
//     alert( randomInteger(1, 5) ); // 1
//
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5


// здесь будет всегда только однозначое число , не совсем понял как в js сгенерировать двухзначное .
function rand(min,max){
    let x = 1;
    while (x){
        let num = (Math.random(min, max) * 10); // здесь случайное число от 0 до 1 генерируеться , и умножаеться на 10 что бы знак сместить на 1 в право и получить число больше 1.
        if (num >= min && num < max){
            x = 0;
            return Math.floor(num); // а здесь число с плавающей точкой через floor округляеться
        }
    }
}

for (i = 0; i < 10; i++){
    console.log(rand(5,9));
}

// Задание No6. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым
// символом.
//     Например:
// ucFirst("вася") == "Вася";


function ucFirst(txt){
    return txt[0].toUpperCase() + txt.slice(1); // toUpperCase() делает первую букву большой а через txt.slice прибавялеться к ней  начиная со второго символа
}

console.log(ucFirst('qwerty'));


// Задание No7. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
// 'XXX', а иначе false.
//     Функция должна быть нечувствительна к регистру:
//     checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str){
    let strLow = str.toLowerCase(); //  сначала уменьшаю всю строку в маленький регистр
    return strLow.includes('viagra') || strLow.includes('xxx'); // а здесь проверяеться вхождение словая в строку и возвращается true или false
}

console.log(checkSpam('buy ViAgRA now'));

// Задание No8. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
// она превосходит maxlength, заменяет конец str на "...", так, чтобы её длина стала равна
// maxlength.
//     Результатом функции должна быть та же строка, если усечение не требуется, либо,
//     если необходимо, усечённая строка.
//     Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне
// хотело..."
// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str,maxlenght){
    if (str.length > maxlenght){
        return str.slice(0, maxlenght - 1) + '...' ;
    }else{
        return str;
    }
}

// let txt = "Вот, что мне хотелось бы сказать на эту тему:";
let txt = "Всем привет!";

console.log(truncate(txt,20));

// Задание No9. Выделить число
// Есть стоимость в виде строки . То есть сначала идёт знак валюты, а затем –
// число.
//     Создайте функцию , которая будет из такой строки выделять
// числовое значение и возвращать его.
//     Например:
//
// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str){
    return str.slice(1);
}
let txt = "$120";

console.log(extractCurrencyValue(txt));

// Задание No10. Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// • Просит пользователя ввести значения, используя prompt и сохраняет их в
// массив.
// • Заканчивает запрашивать значения, когда пользователь введёт не числовое
// значение, пустую строку или нажмёт «Отмена».
// • Подсчитывает и возвращает сумму элементов массива.
// • P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput(){

    let array = [];   // массив в который складыва.ю вводимые числа.
    while (true){
        let numbers = prompt('Введите число ');
        if (numbers === null || numbers === '' || isNaN(numbers) ){   // здесь проверяеться является ли введенные данные числом ил инет
            break;
        }else {
            array.push(+numbers);   // здесь происходит запись введеного числа после проверки в "конец" массива
        }
    }
    // а здесь весь массив чисел раскрываеться и плюсуеться по очереди
    let sum = 0;
    for (let value of array){
        sum += value;
    }

    return sum;

}

console.log(sumInput());