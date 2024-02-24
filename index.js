console.log('START');

const imgBase = [
    {  
        image: "./img/banner_one.svg",
        image_dot1: "./img/darkish_dot.svg",
        image_dot2: "./img/lightish_dot.svg",
        image_dot3: "./img/lightish_dot.svg"
    },
    {
        image: "./img/banner_two.svg",
        image_dot1: "./img/lightish_dot.svg",
        image_dot2: "./img/darkish_dot.svg",
        image_dot3: "./img/lightish_dot.svg"
    },
    {
        image: "./img/banner_three.svg",
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

//test
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

const category = ['Bestsellers', 'Art & Fashion'];

const list_categories = document.querySelector(".main-section-book__title");
list_categories.innerHTML = `
<div>`+ category[0] +`</div>
<div>`+ category[1] +`</div>
`;