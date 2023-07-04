/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum() {
        return this.reduce((sum, num) => sum + num, 0);
    }

    onlyNumbers() {
        return this.filter((el) => typeof el === 'number')
    }
}

const myExtendedArray = new ExtendedArray(1, 2, 3);
console.log(myExtendedArray);
console.log(myExtendedArray.sum());
console.log(myExtendedArray.onlyNumbers());

const myExtendedArray2 = new ExtendedArray('a', 7, 'b', 2, 'c', 3);
console.log(myExtendedArray2);
console.log(myExtendedArray2.sum());
console.log(myExtendedArray2.onlyNumbers());

const myExtendedArray3 = new ExtendedArray(10, 20, 30);
console.log(myExtendedArray3);
console.log(myExtendedArray3.sum()); 
console.log(myExtendedArray3.onlyNumbers()); 

const myExtendedArray4 = new ExtendedArray();
console.log(myExtendedArray4);
console.log(myExtendedArray4.sum()); 
console.log(myExtendedArray4.onlyNumbers()); 

myExtendedArray2.forEach((el) => console.log(el))//можем убедиться, что остальные методы массивов, такие как forEach, также доступны для экземпляров класса ExtendedArray, так как он наследует от класса Array.


/**
 * используем ключевое слово class для определения нового класса ExtendedArray. 
 * Класс расширяет класс Array с помощью ключевого слова extends.
 * Внутри класса ExtendedArray определяются два метода: sum и onlyNumbers.
 * Метод sum использует метод reduce класса Array, чтобы вычислить сумму всех элементов массива. 
 * Начальное значение аккумулятора устанавливается равным 0, а функция обратного вызова складывает каждый элемент с аккумулятором.
 * Метод onlyNumbers использует метод filter класса Array, чтобы отфильтровать только числовые элементы массива. 
 * Функция обратного вызова проверяет тип каждого элемента и возвращает только те, которые являются числами.
 * создаем несколько экземпляров класса ExtendedArray с различными элементами. 
 * вызываем методы sum и onlyNumbers для каждого экземпляра
 */
  