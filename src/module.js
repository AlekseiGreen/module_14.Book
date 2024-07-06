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



export {getBookID, initPointSlider};