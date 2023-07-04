/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

const processPosts = (posts) => {
  return posts.map((post) => {
    const { postId, author: postAuthor, commentsQty: postCommentsQty = 0} = post 
    return {
      postAuthor,
      postCommentsQty,
      postId: postId + 1000,
    }
  })
}

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },у
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений

/**
 * 
 * создаем функцию processPosts, которая принимает в качестве аргумента массив объектов posts.
 * В функции processPosts, используем метод map, чтобы пройтись по каждому объекту в массиве posts.
 * В теле метода map, применяем деструктуризацию объекта для каждого элемента массива posts. 
 * извлекаем значения свойств postId, author, и commentsQty из каждого объекта и сохраняем в отдельных переменных postId, postAuthor, и postCommentsQty соответственно. 
 * также используем сокращенную запись свойств, чтобы переименовать свойства author и commentsQty в postAuthor и postCommentsQty.
 * После деструктуризации объекта, увеличиваем значение свойства postId на 1000, чтобы выполнить требование задачи.
 * Для каждого объекта из массива posts создаем новый объект с измененными значениями свойств postId, postAuthor, и postCommentsQty.
 * Метод map создает новый массив, содержащий объекты с измененными значениями. 
 * новый массив возвращается из функции processPosts.
 * После вызова функции processPosts с аргументом testPosts, результат сохраняется в переменной processedPosts, которая затем выводится в консоль. 
 * видим новый массив объектов, соответствующий измененным значениям из исходного массива testPosts.
 * В конце кода также выводим исходный массив testPosts в консоль, чтобы убедиться, что оригинальный массив остался без изменений. 
 * 
 * важно! что метод map создает новый массив, не изменяя оригинальный.
 */