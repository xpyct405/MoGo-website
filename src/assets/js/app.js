// INTRO
let nav =document.querySelector('.nav');
let btn = document.querySelector('.menu-burger')

// Функция тогла навигации
const toggleNav = function(){
    nav.classList.toggle('active')
}

// Функция тогла кнопки
const toggleBtn = function() {
    btn.classList.toggle('active')
}

// Обработчик клика по кнопке
btn.addEventListener('click', function(){
    toggleBtn();
    toggleNav()
 });

// Обработчик клика мимо блока nav и тогла nav и btn
 document.addEventListener('click', function(event){
     const target = event.target;
     const itsNav = target == nav || nav.contains(target);
     const itsBtn = target == btn;
     const navIsActive = nav.classList.contains('active');

     if (!itsNav && !itsBtn && navIsActive) {
        toggleNav();
        toggleBtn();
     }
 });

//  Обработчик, при скроле убирает классы навигации и кнопки. Срабатываети при любом скролле почему-то. Надо ФИКСить
 window.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset;
    if(scrollTop <= 300){
        btn.classList.remove('active')
        nav.classList.remove('active')
    }
 })

 

// ABOUT

// WHAT WE DO
let header = document.querySelectorAll('.wedo__item-header');
for( let i = 0; i < header.length; i++) {
    header[i].addEventListener('click', function(){
        this.classList.toggle('wedo-active');
        let desc = this.nextElementSibling;
        desc.classList.toggle('wedo-show')
    });  
}



// MAP

let openMap = document.querySelector('.map__info');
let mapGoogle = document.querySelector('.map__google');
let closeMap = document.querySelector('.map__close');

// При клике на openMap добавляются классы
openMap.addEventListener('click', function(){
    mapGoogle.classList.add('active');
    openMap.classList.add('disable')
    checkClass();
})

// функция Проверки класса и добавления и удаления в зависимости от проверки
let checkClass = function(){
    if(openMap.classList.contains('disable')){
        closeMap.classList.add('active')
    } else {
        closeMap.classList.remove('active')
    }
}

// При клике на closeMap удаляются классы
closeMap.addEventListener('click', function(){
    closeMap.classList.remove('active');
    openMap.classList.remove('disable');
    mapGoogle.classList.remove('active');
})






//  btn.addEventListener('click', function(){
//     btn.classList.toggle('menu-burger-active')
// });

// nav.addEventListener('mouseleave', function(){
//     nav.classList.remove('nav-active')
// })

// window.addEventListener('click', ()=>{
//     nav.classList.remove('nav-active')
// })

// nav.addEventListener('mouseout', function(){
//     nav.classList.remove('nav-active')
// })


// if(nav.classList.contains('nav-active')){
//     btn.classList.add('menu-burger-active')
// }else{
//     btn.classList.remove('menu-burger-active')
// }




// btn.addEventListener('mouseout', function(){
//     nav.classList.remove('nav-active')
// })










    
    // if(this.classList.contains('wedo-active')){
        
    // }

// this.click();







//     header[i].onclick = function () {
//         this.classList.toggle('wedo-active');
//         this.nextElementSibling.classList.toggle('wedo-show')
//     }
//     if(this.classList.contains('.wedo-active')){
//         arrow.classList.add('wedo-arrow')
//     }else{}




// header.click();



// https://www.youtube.com/watch?v=zOE8VxgMZ2M

// let accButtons = document.getElementsByClassName('accordion');
// let panels         = document.getElementsByClassName('panel');
// panels[0].classList.add('show');

// for(let i = 0; i < accButtons.length; i++){
//   accButtons[i].onclick = function(){
//     for(let x = 0; x < panels.length; x++){
//       panels[x].classList.remove('show')
//     }
//     this.nextElementSibling.classList.toggle('show');
//   }
// }

// https://www.youtube.com/watch?v=gz1v1KenZWk





// wedoHeader.forEach((item) => {
//     item.addEventListener('click', function(){
//         let currentHeader = item;
//         let tabId = currentHeader.getAttribute('data-tab'); //выбираем все wedoHeader через data-tab
//         let currentTab = document.querySelector(tabId); //выбираем все wedoDesc через tabId 

//         if (! currentHeader.classList.contains ('active')){
//             wedoHeader.forEach(function(item){
//                 item.classList.remove('active');
//             });
//             wedoDesc.forEach(function(item){
//                 item.classList.remove('wedo__item-desc-hide');
//             });

//             currentHeader.classList.add('active');
//             currentTab.classList.add('wedo__item-desc-hide');

//         }
//     })
// })

// document.querySelector('.wedo__item-header').click();
// Обработчик событий клика пол массиву кнопок вариант 1
// for(let i = 0; i < wedoBtn.length; i++) {
//     wedoBtn[i].onclick = function(){
//         console.log('Click!');
//     };
// }

// Обработчик событий клика пол массиву кнопок вариант 2
// wedoBtn.forEach((item) => {
//     item.addEventListener('click', ()    => {
//         console.log('Click!');
//     })
// })



// wedoBtn.forEach((item) => {
//     item.addEventListener('click', () => {
//         wedoDesc.classList.toggle('wedo__item-desc-hide')
//         arrowBtn.classList.toggle('arrow-down')
//         console.log('Click!');
//     })
// })

// wedoBtn.onclick = function(){
    
//     console.log(wedoDesc.textContent)
// }


