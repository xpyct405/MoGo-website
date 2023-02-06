// Модальное окно. Служит для открытия изображений .footer__inst-item в модальном окне. Открывается по клику на изображение, закрывается при клике по крестику или вне изображения модального окна
// https://github.com/xpyct405/Modal-window-Click-event

// Получение модального окна
let modal = document.getElementById('myModal');``

// Получение изображения, помещение его в модальное окно и также использование alt картинки как описание captionText
let img = document.querySelectorAll('.footer__inst-container-img');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i <img.length; i++) {
  img[i].addEventListener('click', function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; 
  })
}


// Получение кнопки закрытия Х <span>  
let closeBtn = document.getElementsByClassName("close")[0];

// При клике на Х модальное окно закрывается.
closeBtn.onclick = function() {
  modal.style.display = "none";
}


// Обработчик события клика вне окна!
// Функция при клике по модальному окну modal в любое место кроме картинки, изменяет стиль на display: none у modal
modal.onclick = function (e) {
  // Ниже условие которое проверяет на какую область был onclick, и если на область которая включает modalImg, т.е. картинку, то возвращает true, иначе false
  // includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
	const withinBoundaries = e.composedPath().includes(modalImg);
  console.log(withinBoundaries)

	if ( ! withinBoundaries ) {
		modal.style.display = 'none'; // скрываем элемент т к клик был за его пределами
	}
}