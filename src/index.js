import './styles.css';
import G_StarSilver from './img/StarSilver.svg';
import G_StarYellow from './img/StarYellow.svg';
import G_Icons from './img/icons.svg';
import G_BannerOne from './img/banner_one.svg';
import G_BannerTwo from './img/banner_two.svg';
import G_BannerThree from './img/banner_three.svg';

console.log('START');


const headerIcon = document.querySelector(".header-img-icons");
headerIcon.innerHTML = `<img src="${G_Icons}" alt="IMG" />`;

const imgBase = [
    {
        image: `${G_BannerOne}`,
        image_dot1: "./img/darkish_dot.svg",
        image_dot2: "./img/lightish_dot.svg",
        image_dot3: "./img/lightish_dot.svg"
    },
    {
        image: `${G_BannerTwo}`,
        image_dot1: "./img/lightish_dot.svg",
        image_dot2: "./img/darkish_dot.svg",
        image_dot3: "./img/lightish_dot.svg"
    },
    {
        image: `${G_BannerThree}`,
        image_dot1: "./img/lightish_dot.svg",
        image_dot2: "./img/lightish_dot.svg",
        image_dot3: "./img/darkish_dot.svg"
    },
]

let index=0;
const banner_img = document.querySelector(".banner-img");
banner_img.innerHTML = `<img src=`+imgBase[0].image+` alt="IMG"/>`;

const banner_img_dot1 = document.querySelector(".banner-img-dot1");
const banner_img_dot2 = document.querySelector(".banner-img-dot2");
const banner_img_dot3 = document.querySelector(".banner-img-dot3");
banner_img_dot1.innerHTML = `<img src=`+imgBase[0].image_dot1+` alt="IMG"/>`;
banner_img_dot2.innerHTML = `<img src=`+imgBase[0].image_dot2+` alt="IMG"/>`;
banner_img_dot3.innerHTML = `<img src=`+imgBase[0].image_dot3+` alt="IMG"/>`;

setInterval(function() {
    if(index>2){index=0};
    banner_img.innerHTML = `<img src=`+imgBase[index].image+` alt="IMG"/>`;
    banner_img_dot1.innerHTML = `<img src=`+imgBase[index].image_dot1+` alt="IMG"/>`;
    banner_img_dot2.innerHTML = `<img src=`+imgBase[index].image_dot2+` alt="IMG"/>`;
    banner_img_dot3.innerHTML = `<img src=`+imgBase[index].image_dot3+` alt="IMG"/>`;
    index++;
}, 5000);

// Три точки
function changeImg(number) {
    if(number == 1) {
        index=0;
        banner_img.innerHTML = `<img src=`+imgBase[0].image+` alt="IMG"/>`;
        banner_img_dot1.innerHTML = `<img src=`+imgBase[0].image_dot1+` alt="IMG"/>`;
        banner_img_dot2.innerHTML = `<img src=`+imgBase[0].image_dot2+` alt="IMG"/>`;
        banner_img_dot3.innerHTML = `<img src=`+imgBase[0].image_dot3+` alt="IMG"/>`;
    }
    if(number == 2) {
        index=1;
        banner_img.innerHTML = `<img src=`+imgBase[1].image+` alt="IMG"/>`;
        banner_img_dot1.innerHTML = `<img src=`+imgBase[1].image_dot1+` alt="IMG"/>`;
        banner_img_dot2.innerHTML = `<img src=`+imgBase[1].image_dot2+` alt="IMG"/>`;
        banner_img_dot3.innerHTML = `<img src=`+imgBase[1].image_dot3+` alt="IMG"/>`;
    }
    if(number == 3) {
        index=3;
        banner_img.innerHTML = `<img src=`+imgBase[2].image+` alt="IMG"/>`;
        banner_img_dot1.innerHTML = `<img src=`+imgBase[2].image_dot1+` alt="IMG"/>`;
        banner_img_dot2.innerHTML = `<img src=`+imgBase[2].image_dot2+` alt="IMG"/>`;
        banner_img_dot3.innerHTML = `<img src=`+imgBase[2].image_dot3+` alt="IMG"/>`;
    }

}

//categoryList
const category = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Sience', 'Technology', 'Travel & Maps'];


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
  
}

// Создание Ячейки книг
const bookShop = document.querySelector(".main-section-book-shop");



// Глобальная переменная j
let j=0;

// Объявление Список жанров
const list_categories = document.querySelector(".main-section-book-box__title");


function getCategoryListHTML(categoryIntro) {
  let requestURL1 = 'https://www.googleapis.com/books/v1/volumes?q="subject:';
  let requestURL2;
  
  requestURL2 = category[j];
  
  let requestURL3 = '"&key=AIzaSyC2XD5L6WHFV8Mtjhs0yU0aDr7B97i0tk0&printType=books&startIndex=0&maxResults=';
  let requestURL4 = 6;
  let requestURL5 = '&langRestrict=en';
  let requestURL = requestURL1 + requestURL2 + requestURL3 + requestURL4 + requestURL5;
  console.log('Cons', requestURL1 + requestURL2);

  
  let categoryListHTML = "";
  for(let i=0; i<categoryIntro.length; i++){
    let catalogDotActive = `${i===j? '<div class="main-section-book-box__title-category-active-ellipse"></div>':''}`;
    let catalogActive = `<div class="main-section-book-box__title-category ${i === j ? "main-section-book-box__title-category-active": ""} " onclick="clickCategory(${i})">${categoryIntro[i]}</div>`;
    categoryListHTML += catalogDotActive + catalogActive;
    console.log(j);
    
  }
  getBooks('GET', requestURL)
    .then(catalogyShop=>{
      // Вывод Ячейки книг
      bookShop.innerHTML = getCategoryShopHTML(catalogyShop);
    })
    .catch(error => {
      console.error(error);
  });
  
  return [categoryListHTML];
}

// Первый запууск
list_categories.innerHTML =  getCategoryListHTML(category);

// Функция выделяет жирным шрифтом выбранную строку
function clickCategory(i) {
    // Глобальная переменная j
    j = i;
    list_categories.innerHTML =  getCategoryListHTML(category);
}
//end-categoryList


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
}



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
            <div class="main-section-book-shop-buy">buy now</div>
        </div>`;

    }
    categoryShopHTML += `<div class="main-section-book-shop-button">LOAD MORE</div>`;
    return categoryShopHTML;
}



const bookFooter = document.querySelector(".footer");
bookFooter.innerHTML = `<div> 1<img src="${G_StarSilver}"/></div>`
