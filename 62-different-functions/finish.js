/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  return a + b
}

const secondFunction = function (a, b) {
  return a + b
}

// после объявления функций

console.log(firstFunction(2, 3));
console.log(secondFunction(2, 3));

// Попытка вызвать функции перед их объявлением

console.log(thirdFunction(2, 1));
console.log(fourthFunction(2, 3)); // Ошибка!

function thirdFunction(a, b) {
  return a + b;
}

const fourthFunction = function(a, b) {
  return a + b;
};
/**
 * 
 * добавляем дополнительный код после объявления функций, затем вызваем все четыре функции: firstFunction, secondFunction, thirdFunction, fourthFunction.
 * успешно вызываем firstFunction и secondFunction, потому что обе они были объявлены до момента их вызова.
 * при попытке вызвать fourthFunction перед фактическим объявлением в коде, получаем ошибку. 
 * из-за различного поведения поднятия (hoisting) между "Function Declaration" и "Function Expression".
 * firstFunction и thirdFunction является "Function Declaration" и поднимается вверх области видимости, поэтому ее можно вызвать до ее фактического объявления.
 * secondFunction и fourthFunction является "Function Expression" и не поднимается, поэтому попытка вызова secondFunction до объявления приводит к ошибке.
 * разница в поведении объявления функций проявляется в возможности вызова функций перед их фактическим объявлением в коде. 
 * "Function Declarations" могут быть вызваны до объявления, "Function Expressions" должны быть объявлены до их использования.
 */