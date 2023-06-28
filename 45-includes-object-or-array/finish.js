/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

function isElementInArray(searchElement, inputArray) {
  if (typeof searchElement !== 'object') {
    return inputArray.includes(searchElement)
  }

  return inputArray
    .map((element) => JSON.stringify(element))
    .includes(JSON.stringify(searchElement))
}

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true

/**
 * Функция isElementInArray объявлена с двумя параметрами: searchElement (элемент для поиска) и inputArray (массив, в котором производится поиск).
 * С помощью условия if проверяется тип searchElement. Если тип searchElement не является объектом (то есть не является массивом или объектом), то выполняется следующий блок кода.
 * Внутри блока кода используется метод массива includes, который проверяет наличие searchElement в inputArray. 
 * Если searchElement найден в inputArray, то функция возвращает true. В противном случае возвращается false.
 * Если тип searchElement является объектом (то есть массивом или объектом), выполняется блок кода после условия if.
 * В этом блоке кода применяется метод массива map для преобразования каждого элемента inputArray в строку, используя функцию JSON.stringify. 
 * Это необходимо, чтобы сравнить преобразованный searchElement с преобразованными элементами массива inputArray.
 * Затем преобразованный inputArray проверяется с помощью метода includes. Если преобразованный searchElement найден в inputArray, функция возвращает true. 
 * В противном случае возвращается false.
 */