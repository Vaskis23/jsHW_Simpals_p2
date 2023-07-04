/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */

function minMax(...nums) {
    return [Math.min(...nums), Math.max(...nums)]
}

let min, max;
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
[min, max] = minMax(24, 5, 34, 10)
console.log(min, max); // 5, 34


/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
[min, max] = minMax(18, 23,103, 70, 80, 25)
console.log(min, max) // 18, 103

/**
 * В теле функции "minMax" мы возвращаем массив, содержащий два элемента. 
 * Первый элемент - это минимальное значение из всех аргументов, которое получается с помощью Math.min(...nums). 
 * Второй элемент - это максимальное значение, которое получается с помощью Math.max(...nums).
 * объявление переменных min и max, которые будут использоваться для хранения минимального и максимального значений.
 * вызываем функцию "minMax" с аргументами 24, 5, 34, 10. 
 * Чтобы присвоить значения переменным "min" и "max" с помощью деструктуризации массива, конструкци [min, max] = minMax(24, 5, 34, 10). 
 * Это означает, что первый элемент возвращаемого массива будет присвоен переменной min, а второй элемент - переменной max.
 * используя деструктуризацию массива, мы присваиваем значения минимального и максимального элементов массива переменным "min" и "max".


 */