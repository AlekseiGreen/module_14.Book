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


export {getBookID, initPointSlider, changeSliderImage};

