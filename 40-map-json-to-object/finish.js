/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */


//JSON.parse - для преобразования JSON обратно в объект. JSON.stryngify - для преобразования объектов в JSON/ map метод помогает перебрать элементы массив и сформировать новый массив
const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]
//используем метод map для преобразования каждого элемента массива postsJSON из формата JSON в JavaScript объекты с помощью JSON.parse
const posts = postsJSON.map(json => JSON.parse(json)); //Результат переобразовани сохраняем в переменной posts
console.log(postsJSON)// вывод в формате json оригинальный массив
console.log(posts);
console.log(posts[1].postId); //обращаюсь к элементу массива posts по индексу 1 (posts[1]) и получаем свойство postId.
console.log(posts[posts.length - 1].commentsQuantity); //обращаюсь к элементу массива posts по индексу posts.length - 1 и получаем свойство commentsQuantity