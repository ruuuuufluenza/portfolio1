

import ' https://ruuuuufluenza.github.io/portfolio1/stylesheet.css ';

// メニューボタンここから
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("menu-trigger").addEventListener("click", function(){
        this.classList.toggle("is-active");
        document.getElementById("nav").classList.toggle("is-active");
        document.getElementById("mask").classList.toggle("is-active");

    })
});

// swiperここから
const mySwiper = new Swiper('.swiper-container',{
    effect: 'fade',
    loop: true,
    speed:5000,
    autoplay:{
        delay:5000
    },
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

//   スクロールしたら

const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function(){

    for (let i = 0; i < targetElement.length; i ++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight * .4
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    
    }
})

// ページトップボタン

const pageTopBtn = document.getElementById('js-scroll-top');
window.addEventListener("scroll", () => {
    const currentY = window.pageYOffset;
    if (currentY > 1400){
       setTimeout(function(){
           pageTopBtn.style.opacity = 1;
       },1);
    }else {
        setTimeout(function(){
            pageTopBtn.style.opacity = 0;
        },1);
    }
});

const TopBtn = document.getElementById('js-scroll-top');
TopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
