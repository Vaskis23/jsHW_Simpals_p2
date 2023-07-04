/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
  console.log(minQty) // 8
  console.log(maxQty) // 29
  console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21


/**
 * 
 * Функция "processQuantities" имеет один параметр, который представляет собой массив. 
 * используем деструктуризацию массива в разделе параметров следующим образом:
 * [minQty, maxQty, defaultQty = 0] - это означает, что первый элемент массива будет присвоен переменной minQty, второй элемент - переменной maxQty, а третий элемент - переменной defaultQty. 
 * Если третий элемент отсутствует, то значение по умолчанию для defaultQty будет равно 0.
 * выводим значения переменных minQty, maxQty и defaultQty в консоль, чтобы убедиться, что они соответствуют ожидаемым значениям.
 * вычисляем и возвращаем результат выражения defaultQty + maxQty - minQty.
 * Создается массив inputQuantities1, содержащий значения [8, 29, 10].
 * вызываем функцию processQuantities и передаем inputQuantities1 в качестве аргумента. 
 * Результат вызова функции будет равен 31.
 * результат вызова processQuantities(inputQuantities1) в консоль.
 * массив inputQuantities2, содержащий значения [8, 29].
 * вызываем функцию processQuantities и передаем inputQuantities2 в качестве аргумента. 
 * Результат вызова функции будет равен 21.
 * Выводим результат вызова processQuantities(inputQuantities2) в консоль.






 */