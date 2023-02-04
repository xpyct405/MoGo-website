const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    mousewheel: true,
    keyboard: true,
    // parallax: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });



// // Ниже представлен Слайдер на чистом JS. Слайдер простой, не адаптивен, не работает слайдом на телефоне, Только кнопки лево, право.
// // https://tproger.ru/articles/javascript-slider/
// // https://www.cyberforum.ru/javascript/thread2888337.html
// /* Увеличиваем индекс на 1 — показываем следующий слайд: */
// document.querySelector(".nextSlide").onclick = () => {
//     showSlides(slideIndex += 1);
//     console.log(slideIndex);
// }

// /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
// document.querySelector(".previousSlide").onclick = () => {
//     showSlides(slideIndex -= 1);
//     console.log(slideIndex);
// }

// /* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Устанавливаем стартовый индекс слайда по умолчанию: */
// let slideIndex = 1;
// /* Вызываем функцию, которая реализована ниже: */
// showSlides(slideIndex);

// /* Функция перелистывания: */
// function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "quote__item", то есть к картинкам: */
//     let slides = document.querySelectorAll(".quote__item");

//     /* Проверяем количество слайдов: */
//     if (n >= slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }

//     /* Проходим по каждому слайду в цикле for: */
//     for (let i = 0; i <slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     /* Делаем элемент flex: */
//     slides[slideIndex - 1].style.display = "flex";
// }