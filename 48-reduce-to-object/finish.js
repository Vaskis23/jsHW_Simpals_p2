/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

function quantitiesByCategories(products) {
  return products.reduce((result, product) => {
    const { category, quantity } = product;
    result[category] = (result[category] || 0) + quantity;
    return result;
  }, {});
}
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

console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
/**
 * Создается функция quantitiesByCategories с одним параметром products, который представляет собой массив товаров.
 * Внутри функции используется метод массива reduce, который позволяет преобразовать массив в другое значение. 
 * В данном случае мы используем его для создания объекта с суммами количества товаров по категориям.
 * Первым аргументом метода reduce является коллбэк-функция, которая принимает два параметра: result (аккумулятор) и product (текущий элемент массива products).
 * Внутри коллбэк-функции деструктурируются свойства category и quantity из объекта product.
 * Затем происходит проверка: если категория category уже существует в объекте result, то к текущему значению суммы количества result[category] прибавляется quantity.
 * Если категория не существует, то ей присваивается начальное значение 0, а затем к этому значению также прибавляется quantity.
 * Наконец, возвращается объект result, который является аккумулятором и будет содержать суммы количества товаров по категориям.
 */