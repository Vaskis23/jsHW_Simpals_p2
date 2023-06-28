/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */


function isElementInArray(inputArray, searchElement) {
    return inputArray.includes(searchElement)
}
const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true
/**
 * Функция isElementInArray принимает два параметра: inputArray (исходный массив) и searchElement (элемент, который нужно найти в массиве).
 * С помощью метода includes происходит поиск searchElement в inputArray. 
 * Метод includes возвращает true, если элемент найден в массиве, и false, если элемент не найден. 
 * происходит поиск searchElement в inputArray
 * 
 * подробнее
 * у нас есть массив transports, который содержит различные виды транспорта.
 * Затем мы вызываем функцию isElementInArray и передаем ей transports в качестве inputArray и искомый элемент, например, 'Bus', 'Phone' или 'Airplane', в качестве searchElement.
 * Функция выполняет поиск searchElement в массиве transports с помощью метода includes.
 * Результат первого вызова функции isElementInArray(transports, 'Bus') будет true, потому что 'Bus' найден в массиве transports.
 * Результат второго вызова функции isElementInArray(transports, 'Phone') будет false, потому что 'Phone' не найден в массиве transports.
 * Результат третьего вызова функции isElementInArray(transports, 'Airplane') будет true, потому что 'Airplane' найден в массиве transports
 */