/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10
let c = 2


if (b > a) {
  let c = 2
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки\
  //var c = 2
  console.log(c)
  // 17
}

console.log(c)
// Uncaught ReferenceError: c is not defined

/**
 * 
 * ошибка "ReferenceError: Cannot access 'c' before initialization" к переменной c обращаются до ее объявления внутри блока if и снаружи..
 * объявляем переменную c перед использованием и внутри блока if.
 * ошибка возникает из-за областей видимости  переменных в блоке.
 */