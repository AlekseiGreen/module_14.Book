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


export {getBookID, initPointSlider, changeSliderImage, stars};

