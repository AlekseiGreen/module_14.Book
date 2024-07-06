import './styles.css';
import './style_scss.scss';
import G_StarSilver from './img/StarSilver.svg';
import G_StarYellow from './img/StarYellow.svg';
import G_Icons from './img/icons.svg';
import G_BannerOne from './img/banner_one.svg';
import G_BannerTwo from './img/banner_two.svg';
import G_BannerThree from './img/banner_three.svg';
import arrowOneImg from './img/arrow.svg';
import {getBookID} from './module';

console.log('START');


// Глобальные переменные
let j=0;
let G_initQuantityBooks = 6;
let G_quantityBooks = G_initQuantityBooks;
let G_addQuantityBooks = 6;
let G_numberShoppingBooks;
let G_localStorage = []; // Информация о книгах, добавленных в корзину
// end Глобальные переменные


const parentPoints = document.querySelector('.main-section-banner-dots');
const headerIcon = document.querySelector(".header-img-icons");
headerIcon.innerHTML = `
  <img src="${G_Icons}" alt="IMG" />
  `;

const imgBase = [
    {
        image: `${G_BannerOne}`
    },
    {
        image: `${G_BannerTwo}`
    },
    {
        image: `${G_BannerThree}`
    },
]


// Инициализация точки
function initPointSlider(){
  imgBase.forEach((img, index) => {
    parentPoints.innerHTML += `<div class="banner-img-dot ${index === 0 ? 'active': ''}" data-index="${index}"></div>`;
  })
}// end Инициализация точки

// Слайдер главной картинки
function changeSliderImage(index){
  banner_img.innerHTML = `<img src=`+imgBase[index].image+` alt="IMG"/>`;
  document.querySelector(`.banner-img-dot.active`).classList.remove('active');
  document.querySelector(`.banner-img-dot[data-index="${index}"]`).classList.add('active');
}// end Слайдер главной картинки

// Инициализация баннера
initPointSlider();

let index = 0;
const banner_img = document.querySelector(".banner-img");
banner_img.innerHTML = `<img src=`+imgBase[0].image+` alt="IMG"/>`;

// Перелистывание баннера каждые 5 секунд
setInterval(function() {
    if(index>2){index=0};
    changeSliderImage(index);
    index++;
}, 5000);

const arrowOne = document.querySelector(".main-section-banner-box-one__arrow");
arrowOne.innerHTML = `<img src="${arrowOneImg}" alt="arrowOne"/>`;

const arrowTwo = document.querySelector(".main-section-banner-box-two__arrow");
arrowTwo.innerHTML = `<img src="${arrowOneImg}" alt="arrowTwo"/>`;




//categoryList
const category = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Psychology', 'Technology', 'Travel & Maps'];


// Выполнение запроса googlebooks key API
function getBooks(method, url){
  return new Promise((resolve, reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';

    xhr.onload = ()=> {
      if(xhr.status>=400){
        reject(xhr.response);
        console.log('Before OFF');
      } else{
        resolve(xhr.response);
      }
      
    }

    xhr.send();
  });
}// end Выполнение запроса googlebooks key API

// Создание Ячейки книг
const bookShop = document.querySelector(".main-section-book-shop");


// Объявление Список жанров
const list_categories = document.querySelector(".main-section-book-box__title");

// Google book API
function getRequestURL(in_quantityBooks){
  let requestURL1 = 'https://www.googleapis.com/books/v1/volumes?q="subject:';
  let requestURL2;
  
  requestURL2 = category[j];
  
  let requestURL3 = '"&key=AIzaSyC2XD5L6WHFV8Mtjhs0yU0aDr7B97i0tk0&printType=books&startIndex=0&maxResults=';
  let requestURL4 = in_quantityBooks;
  let requestURL5 = '&langRestrict=en';
  let requestURL = requestURL1 + requestURL2 + requestURL3 + requestURL4 + requestURL5;
  return requestURL;
}// end Google book API

// Формирование списка категорий
function getCategoryListHTML(in_categoryList, in_quantityBooks) {
  
  let reqURL = getRequestURL(in_quantityBooks);
  
  let categoryListHTML = "";
  // список категорий
  for(let i=0; i<in_categoryList.length; i++){
    let catalogDotActive = `${i==j? '<div class="main-section-book-box__title-category-active-ellipse"></div>':''}`;
    let catalogActive = `<div class="main-section-book-box__title-category ${i == j ? "main-section-book-box__title-category-active": ""}" data-index="${i}">${in_categoryList[i]}</div>`;
    categoryListHTML += catalogDotActive + catalogActive;
  }
  getBooks('GET', reqURL)
    .then(catalogyShop=>{
      // Вывод Ячейки книг
      bookShop.innerHTML = getCategoryShopHTML(catalogyShop);
    })
    .catch(error => {
      console.error(error);
  });
  
  return [categoryListHTML];
}// end Формирование списка категорий


// Первый запуск
list_categories.innerHTML =  getCategoryListHTML(category, G_quantityBooks);

// Функция выделяет жирным шрифтом выбранную строку
function clickCategory(i) {
    // Глобальная переменная j
    j = i;
    list_categories.innerHTML =  getCategoryListHTML(category, G_quantityBooks);
}//end Функция выделяет жирным шрифтом выбранную строку

// Загрузить больше книг
function loadMore(in_quantityBooks, in_addQuantityBooks) {
  list_categories.innerHTML =  getCategoryListHTML(category, in_quantityBooks);
  let out_addQuantityBooks = in_addQuantityBooks;
  return out_addQuantityBooks;
}//end Загрузить больше книг

// Оценка-звездочка
function stars(i, categoryShop) {
  let starIntro = ``;
  let starSilver = `<img src="${G_StarSilver}"/>`;
  let starYellow = `<img src="${G_StarYellow}"/>`;
  if(categoryShop.items[i].volumeInfo.averageRating == undefined) {
    for(let j=0; j < 5; j++){
      starIntro += `<div class="main-section-book-shop-star-star">${starSilver}</div>`
    }
  } else {
    for(let j=0; j < 5; j++){
      if(j < categoryShop.items[i].volumeInfo.averageRating ) {
        starIntro += `<div class="main-section-book-shop-star-star">${starYellow}</div>`
      }
      else {
        starIntro += `<div class="main-section-book-shop-star-star">${starSilver}</div>`
      }
    }
  }
  return starIntro;
}// end Оценка-звездочка



function review(i, categoryShop) {
  let count;
  let reviewCount = ``;
  if(categoryShop.items[i].volumeInfo.ratingCount == undefined) {
    count = 0;
    reviewCount += `<div>${count} review</div>`
  }
  return reviewCount;
}

function descript(i, categoryShop) {
  let descriptDiv = ``;
  if(categoryShop.items[i].volumeInfo.description == undefined) {
    descriptDiv += `<div>${descriptDiv} review1</div>`
  } else{
    descriptDiv += `<div>${categoryShop.items[i].volumeInfo.description.substring(0, 80)} review</div>`
  }
  return descriptDiv;
}

function price(i, categoryShop){
  let priceDiv = '';
  if(categoryShop.items[i].saleInfo.retailPrice == undefined){
    priceDiv += '<div>&#8381 0</div>'
  } else{
    priceDiv += `<div>&#8381 ${categoryShop.items[i].saleInfo.retailPrice.amoun }</div>`;
  }

  //console.log('PRICE->', pr);
  return priceDiv;
}

// // Получение и формирование ID
// function getBookID(id){
//   return id;
// }


function getCategoryShopHTML(categoryShop) {
  let categoryShopHTML = "";
    for(let i=0; i<categoryShop.items.length; i++) {
        categoryShopHTML += `
        <div class="main-section-book-shop__more">
            <div class="main-section-book-shop-cover"><img src="${categoryShop.items[i].volumeInfo.imageLinks.thumbnail}" style="background-size: cover;" alt="imgBook"/></div>
            <div class="main-section-book-shop-autor">${categoryShop.items[i].volumeInfo.authors[0]}</div>
            <div class="main-section-book-shop-title">${categoryShop.items[i].volumeInfo.title.substring(0, 15)}</div>
            <div class="main-section-book-shop-star">${stars(i, categoryShop)}</div>
            <div class="main-section-book-shop-review">${review(i, categoryShop)}</div>
            <div class="main-section-book-shop-description">${descript(i, categoryShop)}</div>
            <div class="main-section-book-shop-price">${price(i, categoryShop)}</div>
            <div class="main-section-book-shop-buy" data-id="${getBookID(categoryShop.items[i].volumeInfo.title.substring(0, 15))}">buy now</div>
        </div>`;

    }
    categoryShopHTML += `<div class="main-section-book-shop-button">LOAD MORE</div>`;
    return categoryShopHTML;
}

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
// Клик-событие
document.addEventListener('click', (event)=>{

  // Три точки
  if(event.target.classList.contains('banner-img-dot')){
    const index = event.target.getAttribute('data-index');
    changeSliderImage(index);
  }

  //Список категорий
  if(event.target.classList.contains('main-section-book-box__title-category')){
    let index = event.target.getAttribute('data-index');
    G_quantityBooks = G_initQuantityBooks;
    clickCategory(index);
  }

  // Загрузить больше книг
  if(event.target.classList.contains('main-section-book-shop-button')){
    console.log("number_1 =", G_quantityBooks);
    console.log("number_2 =", G_addQuantityBooks);
    G_quantityBooks = G_quantityBooks + loadMore(G_quantityBooks + G_addQuantityBooks, G_addQuantityBooks);
  }

  // main-section-book-shop-buy
  if(event.target.classList.contains('main-section-book-shop-buy')){
    let dataID = event.target.getAttribute('data-id');
    // Поиск в массиве id
    let findId = G_localStorage.indexOf(dataID);
    //
    if(findId != -1){
      console.log('True=', findId);
      G_localStorage.splice(findId, 1);
    } else{
      console.log('False=', findId);
      G_localStorage.push(dataID);
    }

    console.log(G_localStorage);
    G_numberShoppingBooks = G_localStorage.length;
    console.log(G_numberShoppingBooks);
    if(G_numberShoppingBooks != 0){
      headerIcon.innerHTML = `
      <img src="${G_Icons}" alt="IMG" />
      <div class="number-shopping-books">${G_numberShoppingBooks}</div>
    `;
    } else{
      headerIcon.innerHTML = `
      <img src="${G_Icons}" alt="IMG" />
    `;
    }
    
  }

  console.log(event.target);
});// end Клик-событие
/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */
