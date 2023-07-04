/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 * 
 * 1. Исправьте все ошибки в коде.
 * 
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 * 
 * 3. Сообщения в консоли должны быть точно такими же, 
 * как и в конце этой задачи
 */

// const photosGallery = (title, dimensions, date) => {
//   return {
//     title,
//     date,
//     [dimensions] : true,
//     info() {
//         console.log(`Фото ${title} имеет разрешение ${dimensions}`)
//     },
//     publishInfo() {
//       console.log(
//         `Фото "${title}" было опубликовано ${Math.floor(
//           (new Date().getTime() - date.getTime()) / 1000
//         )} секунды назад`
//       )
//     },
//   }
// }

const photosGallery = (title, dimensions, date) => {
  return {
    title,
    info() {
      console.log(`Фото ${title} имеет разрешение ${dimensions}`);
    },
    dimensions,
    publishInfo() {
      console.log(
        `Фото было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      );
    },
    [dimensions]: true,
    date
  };
};

const myDogPhoto = photosGallery(
  "My dog",
  "1920x1080",
  new Date()
)

const testDimension1 = "1920x1080"
const testDimension2 = "1080x720"

myDogPhoto.info()
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000)
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

console.log(myDogPhoto[testDimension1]) // true
console.log(myDogPhoto[testDimension2]) // undefined
/**
 * 
 * используем стрелочную функцию для определения функции photosGallery. 
 * создаем объект с использованием сокращенных имен свойств и методов.
 * Для свойств title и dimensions мы используем сокращенную форму записи, где ключ и значение имеют одно и то же имя.
 * Для методов info и publishInfo мы также используем сокращенную форму записи, опуская ключевое слово function.
 * добавляем вычисляемое свойство, где ключом является значение переменной dimensions, а значением - true.
 * создаем экземпляр объекта myDogPhoto с помощью функции photosGallery, передавая нужные значения для title, dimensions и date.
 * вызываем метод info для вывода сообщения о фото и его разрешении.
 *  используем setTimeout, чтобы вызвать метод publishInfo с задержкой в 2 секунды. 
 * Функция publishInfo сохраняет доступ к переменной date благодаря замыканию, даже после того, как функция photosGallery уже завершила свое выполнение. 
 * Это позволяет методу publishInfo использовать значение date, даже если оно было определено внутри функции photosGallery.
 */