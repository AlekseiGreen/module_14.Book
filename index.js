import './styles.css';
import './style_scss.scss';
import G_StarSilver from './img/StarSilver.svg';
import G_StarYellow from './img/StarYellow.svg';
import G_Icons from './img/icons.svg';
import G_BannerOne from './img/banner_one.svg';
import G_BannerTwo from './img/banner_two.svg';
import G_BannerThree from './img/banner_three.svg';
import arrowOneImg from './img/arrow.svg';
import {getBookID, initPointSlider, changeSliderImage, stars, review, descript, price, getBooks, getRequestURL, getCardProductHTML, getCategoryListHTML} from './module';


// Глобальные переменные
let G_j=0;
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

// Инициализация баннера
initPointSlider(imgBase, parentPoints);

let index = 0;
const banner_img = document.querySelector(".banner-img");
banner_img.innerHTML = `<img src=`+imgBase[0].image+` alt="IMG"/>`;

// Перелистывание баннера каждые 5 секунд
setInterval(function() {
    if(index>2){index=0};
    changeSliderImage(banner_img, imgBase, index);
    index++;
}, 5000);

const arrowOne = document.querySelector(".main-section-banner-box-one__arrow");
arrowOne.innerHTML = `<img src="${arrowOneImg}" alt="arrowOne"/>`;

const arrowTwo = document.querySelector(".main-section-banner-box-two__arrow");
arrowTwo.innerHTML = `<img src="${arrowOneImg}" alt="arrowTwo"/>`;

// Категории книг
const category = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Psychology', 'Technology', 'Travel & Maps'];

// Создание Ячейки книг
const bookShop = document.querySelector(".main-section-book-shop");


// Объявление Список жанров
const list_categories = document.querySelector(".main-section-book-box__title");

// Первый запуск
list_categories.innerHTML =  getCategoryListHTML(category, G_j, G_quantityBooks, bookShop, G_StarSilver, G_StarYellow);

// Функция выделяет жирным шрифтом выбранную строку
function clickCategory(in_i) {
    G_j = in_i;
    list_categories.innerHTML =  getCategoryListHTML(category, G_j, G_quantityBooks, bookShop, G_StarSilver, G_StarYellow);
}

// Загрузить больше книг
function loadMore(in_quantityBooks, in_addQuantityBooks) {
  list_categories.innerHTML =  getCategoryListHTML(category, G_j, in_quantityBooks, bookShop, G_StarSilver, G_StarYellow);
  let out_addQuantityBooks = in_addQuantityBooks;
  return out_addQuantityBooks;
}

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
// Клик-событие
document.addEventListener('click', (event)=>{

  // Три точки
  if(event.target.classList.contains('banner-img-dot')){
    const index = event.target.getAttribute('data-index');
    changeSliderImage(banner_img, imgBase, index);
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
});
/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */
