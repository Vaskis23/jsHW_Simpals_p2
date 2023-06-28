/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

function pushIfUnique(inputArray, newElement) {
    if (inputArray.includes(newElement)) {
      console.log(`${newElement} уже находится в массиве`);
    } else {
      inputArray.push(newElement);
    }
  }
  
//   const pushIfUnique = (inputArray, newElement) => {
//     if (inputArray.includes(newElement)) {
//         console.log(`${newElement} уже находится в массиве`);
//          return
//       } 

//         inputArray.push(newElement);
//     }

const myNumbers = [123, 50, 27]

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]

/**
 * Создается функция pushIfUnique с двумя параметрами: inputArray (исходный массив) и newElement (новый элемент, который нужно добавить в массив).
 * Внутри функции проверяется с помощью метода массива includes, содержит ли inputArray уже newElement. 
 * Если это условие истинно (то есть newElement уже присутствует в массиве), выводится сообщение в консоль с использованием шаблонных строк, указывая, что newElement уже находится в массиве.
 * Если newElement не найден в inputArray, то он добавляется в массив с помощью метода push.
 */
