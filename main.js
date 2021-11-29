// Задание №1. Переменные
// 1. Объявите две переменные: admin и name.
// 2. Запишите свое имя в переменную name.
// 3. Скопируйте значение из переменной name в admin.
// 4. Выведите на экран значение admin, используя функцию alert.

let name = 'Valerii';
let admin = name;
alert(admin);


// Задание №2. Константы
// Есть следующий код:
//     const birthday = '18.04.1982';
// const age = someCode(birthday);
// В нем объявлены константа birthday, а также age, которая вычисляется при помощи
// некоторого кода, используя значение из birthday (в данном случае детали не имеют
// значения, поэтому код не рассматривается).
// Можно ли использовать заглавные буквы для имени birthday? А для age? Или
//     одновременно для обеих переменных?
// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
// const AGE = someCode(BIRTHDAY); // а здесь?

// Ответ : Да можно , но это будут разные переменные так как они чувствительны к регистру.

// Задание №3. Строки
// Что выведет этот скрипт:
//     5. let name = "Ilya";
// 6. alert( `hello ${1}` ); // ?
// 7. alert( `hello ${"name"}` ); // ?
// 8. alert( `hello ${name}` ); // ?


let name = "Ilya";
alert(`hello ${1}`); //  hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya


// Задание №4. Преобразования типов
// Какой результат будет у выражений ниже?
//     "" + 1 + 0   =    10
//     "" - 1 + 0   =   -1
// true + false     =   1
// 6 / "3"          =   2
// "2" * "3"        =   6
// 4 + 5 + "px"     =   9px
// "$" + 4 + 5      =    $45
// "4" - 2          =   2
// "4px" - 2        =  NaN
// 7 / 0            =  Infinity
// " -9 " + 5       =   -9 5
// " -9 " - 5       =   -14
// null + 1         =  1
// undefined + 1    =   NaN


// Задание №5. Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?
//     let a = 1, b = 1;

// let c = ++a; // = 2
// let d = b++; // = 1


// Задание №6. Результат присваивания
// Чему будут равны переменные a и x в примере ниже?
//     let a = 2;
// let x = 1 + (a *= 2);    = 5

// Задание №7. Операторы сравнения
// Каким будет результат этих выражений?
//     5 > 4                     = true
//     "ананас" > "яблоко"       = false
// "2" > "12"                    = true
// undefined == null             = true
// undefined === null            = false
// null == "\n0\n"               = false
// null === +"\n0\n"             = false


// Задание №8. Операторы взаимодействия
// Создайте страницу, которая спрашивает имя у пользователя и выводит его

let name = prompt('What is your name?', 'anonimus');
alert(`welcome ${name} !`);


// Задание №9. Условные операторы
// Выведется ли alert?
// if ("0") {
//     alert( 'Привет' );
// }
// Answer: Yes.

// Задание №10. Условные операторы
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Каково
// «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае –
// отобразить: «Не знаете? ECMAScript!»

let result = prompt('Каково «официальное» название JavaScript?“?');
if (result == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!')
}

// Задание №11. Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а
// затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//     Предполагается, что пользователь вводит только числа.

let num = prompt('Введите число');
if (num >= 1) {
    alert('more than 0');
} else if (num < 0) {
    alert('less than 0');
} else if (num == 0) {
    alert('0');
}


// Задание №12. ИЛИ
// Что выведет код ниже?
//     alert( null || 2 || undefined );      = 2

// Задание №13. ИЛИ
// Что выведет код ниже?
//     alert( alert(1) || 2 || alert(3) );   = 1
//                                           = 2

// Задание №14. И
// Что выведет код ниже?
//     alert( 1 && null && 2 );              = null

// Задание №15. И
// Что выведет код ниже?
//     alert( alert(1) && alert(2) );        = 1
//                                           = undefined

// Задание №16.
// Что выведет код ниже?
//     alert( null || 2 && 3 || 4 );         = 3


// Задание №17. Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между
// 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = prompt('Укажите число');
if (age >= 14 && age <= 90) {
    alert('возраст от 14 до 90')
} else {
    alert('возраст не подходит')
}


// Задание №18. Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в
// диапазоне 14 и 90 включительно.
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого
// оператора

let num = prompt('your age');

if (num <= 14 || num >= 90) {
    alert('da')
}

// Задание №19. If
// Какие из перечисленных ниже alert выполнятся?
//     Какие конкретно значения будут результатами выражений в условиях if(...)?
// if (-1 || 0) alert( 'first' );           = first
// if (-1 && 0) alert( 'second' );          = ?
// if (null || -1 && 1) alert( 'third' );   = third
// честно говоря я не сильно разобрался с этим заданием


// Задание №20. Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не
// введено или нажата клавиша Esc – показать «Отменено», в противном случае
// отобразить «Я вас не знаю».
// Пароль проверять так:
//     1. Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 2. Иначе – «Неверный пароль»,
// 3. При отмене – «Отменено».

let log = prompt('yor loggin');

if (log === 'Admin') {
    let pass = prompt('your password')
    if (pass === 'Я главный') {
        alert('«Здравствуйте!»')
    } else if (pass === null) {
        alert('«Отменено»')
    } else {
        alert('«Неверный пароль»')
    }
} else {
    alert('I don`t know who you are')
}


// Задание №21. Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:
//     let a = +prompt('a?', '');
//     if (a == 0) {
//         alert( 0 );
//     }
//     if (a == 1) {
//         alert( 1 );
//     }
//     if (a == 2 || a == 3) {
//         alert( '2,3' );
//     }

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2 || 3:
        alert('2,3');
        break;
}


// Задание №22.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае не изменять его. Вывести полученное число.

let number = prompt('number');
if (number > 0) {
    let result = +number + 1;
    alert(result);
} else {
    alert(number);
}


//     Задание №23.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае вычесть из него 2. Вывести полученное число.

let number = prompt('number');
if (number > 0) {
    let result = +number + 1;
    alert(result);
} else {
    let result = +number + 2;
    alert(result);
}

//     Задание №24.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; если
// отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
// полученное число.

let number = prompt('number');
if (number > 0) {
    let result = +number + 1;
    alert(result);
} else if (number == 0) {
    let number = 10;
    alert(number);
} else {
    let result = +number + 2;
    alert(result);
}

//     Задание №25.
// Даны три целых числа. Найти количество положительных чисел в исходном наборе.
let num1 = 3;
let num2 = -1;
let num3 = -2;
let count = 0;

if (num1 > 0) {
    count++;
}
if (num2 > 0) {
    count++;
}
if (num3 > 0) {
    count++;
}
alert(count);

//     Задание №26. Даны три целых числа. Найти количество положительных и количество
// отрицательных чисел в исходном наборе.

let num1 = 3;
let num2 = -1;
let num3 = -2;
let countPlus = 0;
let countMinus = 0;

if (num1 > 0) {
    countPlus++;
}
if (num2 > 0) {
    countPlus++;
}
if (num3 > 0) {
    countPlus++;
}
//----
if (num1 < 0) {
    countMinus++;
}
if (num2 < 0) {
    countMinus++;
}
if (num3 < 0) {
    countMinus++;
}

alert(countPlus);
alert(countMinus);

//     Задание №27.
// Даны два числа. Вывести большее из них.

let num1 = 5;
let num2 = 7;
if (num1 > num2) {
    alert(num1);
} else {
    alert(num2);
}

//     Задание №28.
// Даны два числа. Вывести вначале большее, а затем меньшее из них.

let num1 = 5;
let num2 = 7;
if (num1 > num2) {
    alert(num1);
    alert(num2);
} else if (num2 > num1) {
    alert(num2);
    alert(num1);
}

//     Задание №32.
// Даны три числа. Найти наименьшее из них.
let num1 = 3;
let num2 = -1;
let num3 = -2;
if (num1 < num2 && num1 < num3) {
    alert(num1);
} else if (num2 < num1 && num2 < num3) {
    alert(num2);
} else if (num3 < num1 && num3 < num2) {
    alert(num3);
}

//     Задание №33.
// Даны три числа. Найти среднее из них (то есть число, расположенное между
// наименьшим и наибольшим).
let num1 = 3;
let num2 = 5;
let num3 = 7;
if (num1 > num2 && num1 < num3) {
    alert(num1);
} else if (num2 > num1 && num2 < num3) {
    alert(num2);
} else if (num3 > num2 && num3 < num1) {z
    alert(num3);
}

// Задание №34.
// Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
let num1 = 3;
let num2 = 5;
let num3 = 7;
// --
if (num1 < num2 && num1 < num3) {
    alert(num1);
} else if (num2 < num1 && num2 < num3) {
    alert(num2);
} else if (num3 < num1 && num3 < num2) {
    alert(num3);
}
// ++
if (num1 > num2 && num1 > num3) {
    alert(num1);
} else if (num2 > num1 && num2 > num3) {
    alert(num2);
} else if (num3 > num1 && num3 > num2) {
    alert(num3);
}

//     Задание №35.
// Даны три числа. Найти сумму двух наибольших из них.
let num1 = 3;
let num2 = 5;
let num3 = 7;
let numMax = 0;
let numMiddle = 0;

if (num1 > num2 && num1 > num3) {
    numMax = num1;
} else if (num2 > num1 && num2 > num3) {
    numMax = num2;
} else if (num3 > num1 && num3 > num2) {
    numMax = num3;
}

if (num1 > num2 && num1 < num3) {
    numMiddle = num1;
} else if (num2 > num1 && num2 < num3) {
    numMiddle = num2;
} else if (num3 > num2 && num3 < num1) {
    numMiddle = num3;
}
alert(numMax + numMiddle);

//     Задание №36.
// Даны три целых числа, одно из которых отлично от двух других, равных между собой.
//     Определить порядковый номер числа, отличного от остальных.

let num1 = 3;
let num2 = 7;
let num3 = 3;
if (num1 !== num2 && num1 !== num3) {
    alert('1');
} else if (num2 !== num1 && num2 !== num3) {
    alert('2');
} else if (num3 !== num1 && num3 !== num2) {
    alert('3');
}

//     Задание №31.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной большее из этих значений, а если равны, то присвоить
// переменным нулевые значения. Вывести новые значения переменных A и B.

let num1 = 4;
let num2 = 6;
let numMax = 0;

if (num1 > num2) {
    numMax = num1;
} else if (num2 > num1) {
    numMax = num2;
}

if (num1 !== num2) {
    num1 = numMax;
    num2 = numMax;
} else {
    num1 = 0;
    num2 = 0;
}

alert(num1);
alert(num2);

// Задание №29. Даны две переменные вещественного типа: A, B. Перераспределить
// значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
// большее. Вывести новые значения переменных A и B.

let num1 = 7;
let num2 = 2;
let numMax = 0;
let numMin = 0;

if (num1 > num2) {
    numMax = num1;
} else if (num2 > num1) {
    numMax = num2;
}
if (num1 < num2) {
    numMin = num1;
} else if (num2 < num1) {
    numMin = num2;
}

num1 = numMin;
num2 = numMax;

alert(num1);
alert(num2);

//     Задание №30.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной сумму этих значений, а если равны, то присвоить переменным
// нулевые значения. Вывести новые значения переменных A и B.
let num1 = 3;
let num2 = 7;
if (num1 !== num2) {
    num1 = num1 + num2;
    num2 = num1;
} else {
    num1 = 0;
    num2 = 0;
}

alert(num1);
alert(num2);