// Получение и формирование ID
function getBookID(id){
    return id;
}

// Инициализация точки
function initPointSlider(in_imgBase, in_parentPoints){
    in_imgBase.forEach((img, index) => {
        in_parentPoints.innerHTML += `<div class="banner-img-dot ${index === 0 ? 'active': ''}" data-index="${index}"></div>`;
    })
}

// Слайдер главной картинки
function changeSliderImage(in_bannerImg, in_imgBase, in_index){
    in_bannerImg.innerHTML = `<img src=`+in_imgBase[in_index].image+` alt="IMG"/>`;
    document.querySelector(`.banner-img-dot.active`).classList.remove('active');
    document.querySelector(`.banner-img-dot[data-index="${in_index}"]`).classList.add('active');
}

// Оценка-звездочка
function stars(in_i, in_categoryShop, in_StarSilver, in_StarYellow) {
    let starIntro = ``;
    let starSilver = `<img src="${in_StarSilver}"/>`;
    let starYellow = `<img src="${in_StarYellow}"/>`;
    if(in_categoryShop.items[in_i].volumeInfo.averageRating == undefined) {
      for(let j=0; j < 5; j++){
        starIntro += `<div class="main-section-book-shop-star-star">${starSilver}</div>`
      }
    } else {
      for(let j=0; j < 5; j++){
        if(j < in_categoryShop.items[in_i].volumeInfo.averageRating ) {
          starIntro += `<div class="main-section-book-shop-star-star">${starYellow}</div>`
        }
        else {
          starIntro += `<div class="main-section-book-shop-star-star">${starSilver}</div>`
        }
      }
    }
    return starIntro;
}

// Обзор
function review(in_i, in_categoryShop) {
    let count;
    let reviewCount = ``;
    if(in_categoryShop.items[in_i].volumeInfo.ratingCount == undefined) {
      count = 0;
      reviewCount += `<div>${count} review</div>`
    }
    return reviewCount;
}

// Описание
function descript(in_i, in_categoryShop) {
    let descriptDiv = ``;
    if(in_categoryShop.items[in_i].volumeInfo.description == undefined) {
        descriptDiv += `<div>${descriptDiv}</div>`;
    } else{
        descriptDiv += `<div>${in_categoryShop.items[in_i].volumeInfo.description.substring(0, 80)}</div>`;
    }
    return descriptDiv;
}

// Цена
function price(in_i, in_categoryShop){
    let priceDiv = '';
    if(in_categoryShop.items[in_i].saleInfo.retailPrice == undefined){
        priceDiv += '<div>&#8381 NOT_FOR_SALE</div>'
    } else{
        priceDiv += `<div>&#8381 ${in_categoryShop.items[in_i].saleInfo.retailPrice.amount}</div>`;
    }
    return priceDiv;
}

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

// Google book API
function getRequestURL(in_category, in_j, in_quantityBooks){
  let requestURL1 = 'https://www.googleapis.com/books/v1/volumes?q="subject:';
  let requestURL2;
  
  requestURL2 = in_category[in_j];
  
  let requestURL3 = '"&key=AIzaSyC2XD5L6WHFV8Mtjhs0yU0aDr7B97i0tk0&printType=books&startIndex=0&maxResults=';
  let requestURL4 = in_quantityBooks;
  let requestURL5 = '&langRestrict=en'; 
  let requestURL = requestURL1 + requestURL2 + requestURL3 + requestURL4 + requestURL5;
  return requestURL;
}

// CardProduct карточка товара
function getCardProductHTML(сardProduct, in_StarSilver, in_StarYellow) {
    let сardProductHTML = "";
      for(let i=0; i<сardProduct.items.length; i++) {
        сardProductHTML += `
          <div class="main-section-book-shop__more">
              <div class="main-section-book-shop-cover"><img src="${сardProduct.items[i].volumeInfo.imageLinks.thumbnail}" style="background-size: cover;" alt="imgBook"/></div>
              <div class="main-section-book-shop-autor">${сardProduct.items[i].volumeInfo.authors[0]}</div>
              <div class="main-section-book-shop-title">${сardProduct.items[i].volumeInfo.title.substring(0, 15)}</div>
              <div class="main-section-book-shop-star">${stars(i, сardProduct, in_StarSilver, in_StarYellow)}</div>
              <div class="main-section-book-shop-review">${review(i, сardProduct)}</div>
              <div class="main-section-book-shop-description">${descript(i, сardProduct)}</div>
              <div class="main-section-book-shop-price">${price(i, сardProduct)}</div>
              <div class="main-section-book-shop-buy" data-id="${getBookID(сardProduct.items[i].volumeInfo.title.substring(0, 15))}">buy now</div>
          </div>`;
  
      }
      сardProductHTML += `<div class="main-section-book-shop-button">LOAD MORE</div>`;
      return сardProductHTML;
  }


export {getBookID, initPointSlider, changeSliderImage, stars, review, descript, price, getBooks, getRequestURL, getCardProductHTML};
