/** ЗАДАЧА 70 - Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */

const arr = [1, 2, 3, 4, 5, 6, 7]

const [a, b, ...c] = arr
/**
 *  присваиваем элемент массива переменной a, b, ...c
 *  "rest" оператор ...c собирает все остальные элементы массива, начиная с третьего элемента, и присваивает их переменной c
 */

console.log(a)
// 1

console.log(b)
// 2

console.log(c)
// [3, 4, 5, 6, 7]
