/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]
const sortProductsByPrice = (products) =>
[...products].sort((a, b) => a.price - b.price)
const sortedProducts = sortProductsByPrice(inputProducts)



console.log(sortedProducts) // Массив отсортированных товаров

console.log(inputProducts) // Оригинальный массив не должен измениться
/**
 * Мы создаем функцию sortProductsByPrice с одним параметром products, которая принимает массив товаров.
 * Внутри функции мы создаем копию исходного массива товаров, используя оператор spread [...products]. 
 * Создание копии массива позволяет сохранить оригинальный массив без изменений.
 * Затем мы применяем метод sort к созданной копии массива товаров. 
 * Метод sort принимает функцию сравнения (a, b) => a.price - b.price. Функция сравнения сортирует объекты по значению цены (a.price - b.price). 
 * Если результат выражения a.price - b.price отрицательный, то a будет располагаться перед b в отсортированном массиве, а если положительный - b будет располагаться перед a. 
 * Таким образом, массив будет отсортирован по возрастанию цены.
 * Результат отсортированного массива сохраняется в переменной sortedProducts.
 * Мы выводим отсортированный массив товаров console.log(sortedProducts).
 * Затем мы также выводим оригинальный массив товаров console.log(inputProducts) для проверки, что оригинальный массив не изменился.
 */