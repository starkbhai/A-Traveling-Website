let navbar=document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.add('active');
    console.log("ok and ok and <br>");
}
document.querySelector('#nav-close').onclick=()=>{
    navbar.classList.remove('active');
    console.log("remove <br>");
}

window.onscroll =()=>{
    navbar.classList.remove('active');
    if(window.scrollY > 0){
        document.querySelector(".header").classList.add('active');
    }else{
        document.querySelector(".header").classList.remove('active');
    }
};


window.onload =()=>{
   
    if(window.scrollY > 0){
        document.querySelector(".header").classList.add('active');
    }else{
        document.querySelector(".header").classList.remove('active');
    }
};



let searchForm=document.querySelector(".search-form");

document.querySelector("#search-btn").onclick=()=>{
    searchForm.classList.add('active');
}
document.querySelector('#close-search').onclick=()=>{
    searchForm.classList.remove("active");
}


var swiper = new Swiper (".home-slider",{
    loop:true,
    grabCursore:true,

    navigation:{
        nextE1:".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});

var swiper = new Swiper (".product-slider",{
    loop:true,
    grabCursore:true,
    spaceBetween:20, 

    navigation:{
        nextE1:".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
           
        },
        640:{
            slidesPerView:2,
           
        },
        768:{
            slidesPerView:3,
            
        },
        1024:{
            slidesPerView:4,
            

        },


    },
});

var swiper = new Swiper (".review-slider",{
    loop:true,
    grabCursore:true,
    spaceBetween:20, 

    navigation:{
        nextE1:".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
           
        },
        640:{
            slidesPerView:2,
           
        },
        768:{
            slidesPerView:3,
            
        },
     
    },
});


var swiper = new Swiper (".clients-slider",{ 
    loop:true,
    grabCursore:true,
    spaceBetween:20, 

    breakpoints:{
        0:{
            slidesPerView:1,
           
        },
        640:{
            slidesPerView:2,
           
        },
        768:{
            slidesPerView:3,
            
        },
     
    },
});

