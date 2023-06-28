/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

//forEach явный возварат
function cityInfo(city, index) {
    return `${city} is at the index ${index} in the myCities array`;
  }
                                            //Функция cityInfo принимает два параметра: city и index. Она возвращает строку, которая содержит информацию о городе и его индексе в массиве "myCities". 
  myCities.forEach((city, index) => {   //Затем мы используем метод массива forEach для перебора всех элементов массива "myCities". 
                                    //Для каждого элемента вызываем функцию cityInfo и выводим результат вызова в консоль.
  console.log(cityInfo(city, index));//
});


//forEach v2 curs не явный возврат метод масивов 
const myCities = ['London', 'New York', 'Singapore']

const cityInfo = (city, index) => 
`${city} is at the index ${index} in the myCities array`;

myCities.forEach((city, index) => console.log(cityInfo(city, index))) //первый параметр функции будет равнятся значению первому определенного елемента массива второй будет слдержать индекс определенного элемента


//for 
function cityInfo(city, index) {
    return `${city} is at the index ${index} in the myCities array`;
  }
  
  for (let i = 0; i < myCities.length; i++) { //тут используем цикл for для перебора всех элементов массива "myCities". 
    console.log(cityInfo(myCities[i], i)); // Для каждого элемента вызываем функцию cityInfo
  }