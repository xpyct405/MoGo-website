/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// INTRO HEADER\r\nlet nav =document.querySelector('.nav');\r\nlet btn = document.querySelector('.menu-burger')\r\n\r\n// Функция тогла навигации\r\nconst toggleNav = function(){\r\n    nav.classList.toggle('active')\r\n}\r\n\r\n// Функция тогла кнопки\r\nconst toggleBtn = function() {\r\n    btn.classList.toggle('active')\r\n}\r\n\r\n// Обработчик клика по кнопке\r\nbtn.addEventListener('click', function(){\r\n    toggleBtn();\r\n    toggleNav()\r\n });\r\n\r\n// Обработчик клика мимо блока nav и тогла nav и btn\r\n document.addEventListener('click', function(event){\r\n     const target = event.target;\r\n     const itsNav = target == nav || nav.contains(target);\r\n     const itsBtn = target == btn;\r\n     const navIsActive = nav.classList.contains('active');\r\n\r\n     if (!itsNav && !itsBtn && navIsActive) {\r\n        toggleNav();\r\n        toggleBtn();\r\n     }\r\n });\r\n\r\n//  Обработчик, при скроле убирает классы навигации и кнопки. Срабатываети при любом скролле почему-то. Надо ФИКСить\r\n window.addEventListener('scroll', function(){\r\n    let scrollTop = window.pageYOffset;\r\n    if(scrollTop <= 300){\r\n        btn.classList.remove('active')\r\n        nav.classList.remove('active')\r\n    }\r\n })\r\n\r\n \r\n\r\n// ABOUT\r\n\r\n// QUOTE SLIDER\r\n// SLIDER\r\n\r\n// https://tproger.ru/articles/javascript-slider/\r\n// Устанавливаем стартовый индекс слайда по умолчанию\r\nlet slideIndex = 1;\r\n// Вызываем функцию, которая реализована ниже:\r\nshowSlides(slideIndex);\r\n\r\n// Увеличиваем индекс на 1- показываем следующий слайд:\r\nfunction nextSlide(){\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// WHAT WE DO\r\nlet header = document.querySelectorAll('.wedo__item-header');\r\nfor( let i = 0; i < header.length; i++) {\r\n    header[i].addEventListener('click', function(){\r\n        this.classList.toggle('wedo-active');\r\n        let desc = this.nextElementSibling;\r\n        desc.classList.toggle('wedo-show')\r\n    });  \r\n}\r\n\r\n\r\n\r\n// MAP\r\n\r\nlet openMap = document.querySelector('.map__info');\r\nlet mapGoogle = document.querySelector('.map__google');\r\nlet closeMap = document.querySelector('.map__close');\r\n\r\n// При клике на openMap добавляются классы\r\nopenMap.addEventListener('click', function(){\r\n    mapGoogle.classList.add('active');\r\n    openMap.classList.add('disable')\r\n    checkClass();\r\n})\r\n\r\n// функция Проверки класса и добавления и удаления в зависимости от проверки\r\nlet checkClass = function(){\r\n    if(openMap.classList.contains('disable')){\r\n        closeMap.classList.add('active')\r\n    } else {\r\n        closeMap.classList.remove('active')\r\n    }\r\n}\r\n\r\n// При клике на closeMap удаляются классы\r\ncloseMap.addEventListener('click', function(){\r\n    closeMap.classList.remove('active');\r\n    openMap.classList.remove('disable');\r\n    mapGoogle.classList.remove('active');\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n//  btn.addEventListener('click', function(){\r\n//     btn.classList.toggle('menu-burger-active')\r\n// });\r\n\r\n// nav.addEventListener('mouseleave', function(){\r\n//     nav.classList.remove('nav-active')\r\n// })\r\n\r\n// window.addEventListener('click', ()=>{\r\n//     nav.classList.remove('nav-active')\r\n// })\r\n\r\n// nav.addEventListener('mouseout', function(){\r\n//     nav.classList.remove('nav-active')\r\n// })\r\n\r\n\r\n// if(nav.classList.contains('nav-active')){\r\n//     btn.classList.add('menu-burger-active')\r\n// }else{\r\n//     btn.classList.remove('menu-burger-active')\r\n// }\r\n\r\n\r\n\r\n\r\n// btn.addEventListener('mouseout', function(){\r\n//     nav.classList.remove('nav-active')\r\n// })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n    // if(this.classList.contains('wedo-active')){\r\n        \r\n    // }\r\n\r\n// this.click();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//     header[i].onclick = function () {\r\n//         this.classList.toggle('wedo-active');\r\n//         this.nextElementSibling.classList.toggle('wedo-show')\r\n//     }\r\n//     if(this.classList.contains('.wedo-active')){\r\n//         arrow.classList.add('wedo-arrow')\r\n//     }else{}\r\n\r\n\r\n\r\n\r\n// header.click();\r\n\r\n\r\n\r\n// https://www.youtube.com/watch?v=zOE8VxgMZ2M\r\n\r\n// let accButtons = document.getElementsByClassName('accordion');\r\n// let panels         = document.getElementsByClassName('panel');\r\n// panels[0].classList.add('show');\r\n\r\n// for(let i = 0; i < accButtons.length; i++){\r\n//   accButtons[i].onclick = function(){\r\n//     for(let x = 0; x < panels.length; x++){\r\n//       panels[x].classList.remove('show')\r\n//     }\r\n//     this.nextElementSibling.classList.toggle('show');\r\n//   }\r\n// }\r\n\r\n// https://www.youtube.com/watch?v=gz1v1KenZWk\r\n\r\n\r\n\r\n\r\n\r\n// wedoHeader.forEach((item) => {\r\n//     item.addEventListener('click', function(){\r\n//         let currentHeader = item;\r\n//         let tabId = currentHeader.getAttribute('data-tab'); //выбираем все wedoHeader через data-tab\r\n//         let currentTab = document.querySelector(tabId); //выбираем все wedoDesc через tabId \r\n\r\n//         if (! currentHeader.classList.contains ('active')){\r\n//             wedoHeader.forEach(function(item){\r\n//                 item.classList.remove('active');\r\n//             });\r\n//             wedoDesc.forEach(function(item){\r\n//                 item.classList.remove('wedo__item-desc-hide');\r\n//             });\r\n\r\n//             currentHeader.classList.add('active');\r\n//             currentTab.classList.add('wedo__item-desc-hide');\r\n\r\n//         }\r\n//     })\r\n// })\r\n\r\n// document.querySelector('.wedo__item-header').click();\r\n// Обработчик событий клика пол массиву кнопок вариант 1\r\n// for(let i = 0; i < wedoBtn.length; i++) {\r\n//     wedoBtn[i].onclick = function(){\r\n//         console.log('Click!');\r\n//     };\r\n// }\r\n\r\n// Обработчик событий клика пол массиву кнопок вариант 2\r\n// wedoBtn.forEach((item) => {\r\n//     item.addEventListener('click', ()    => {\r\n//         console.log('Click!');\r\n//     })\r\n// })\r\n\r\n\r\n\r\n// wedoBtn.forEach((item) => {\r\n//     item.addEventListener('click', () => {\r\n//         wedoDesc.classList.toggle('wedo__item-desc-hide')\r\n//         arrowBtn.classList.toggle('arrow-down')\r\n//         console.log('Click!');\r\n//     })\r\n// })\r\n\r\n// wedoBtn.onclick = function(){\r\n    \r\n//     console.log(wedoDesc.textContent)\r\n// }\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;