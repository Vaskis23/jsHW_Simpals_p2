/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

function popularPostsIds(posts, minimalComentsQty) {
  return posts.reduce(
    (postIds, post) =>
    post.comments >= minimalComentsQty
    ? postIds.concat([post.postId])
    : postIds, 
    []
  )
}
const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []

/**
 * Создается функция popularPostsIds с двумя параметрами: posts (массив постов) и minimalCommentsQty (минимальное количество комментариев).
 * Внутри функции используется метод массива reduce, который позволяет преобразовать массив в другое значение. 
 * В данном случае мы используем его для создания массива идентификаторов популярных постов.
 * Первым аргументом метода reduce является коллбэк-функция, которая принимает два параметра: postIds (аккумулятор) и post (текущий элемент массива posts).
 * Внутри коллбэк-функции происходит проверка: если количество комментариев текущего поста (post.comments) больше или равно minimalCommentsQty, то используется оператор условия (?), чтобы добавить идентификатор поста (post.postId) в аккумулятор postIds с помощью метода concat.
 * В противном случае, если количество комментариев не удовлетворяет условию, аккумулятор postIds остается неизменным.
 * Вторым аргументом метода reduce задается начальное значение аккумулятора, в данном случае пустой массив [].
 * Результатом выполнения метода reduce будет новый массив, содержащий идентификаторы популярных постов.
 */