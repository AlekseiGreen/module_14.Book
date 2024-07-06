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


export {getBookID, initPointSlider, changeSliderImage, stars, review, descript, price};

