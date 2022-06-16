const btn = document.querySelector(".btn-mobile")
const nav = document.querySelector("nav")
const scrollBtn = document.querySelector(".top-link")
const btns = document.querySelectorAll(".tab-btn")
const articles = document.querySelectorAll(".content")
const about = document.querySelector(".about")
const logo = document.querySelector(".logo")

function toggleMenu(){
    nav.classList.toggle("active")
}

btn.addEventListener("click", toggleMenu)

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.
    getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        nav.classList.add("fixed-nav")
    }else{
        nav.classList.remove("fixed-nav")
    }

    if(scrollHeight >= 500){
        scrollBtn.classList.add("scrollActive")
    }else{
        scrollBtn.classList.remove("scrollActive")
    }
})

about.addEventListener("click", function(e){
   const id = e.target.dataset.id;
   if(id){
       btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
       })
       articles.forEach(function(article){
           article.classList.remove("active-content");
       })
       const element = document.getElementById(id);
       element.classList.add("active-content");
   }
})

scrollBtn.addEventListener("click", function (){
    window.scrollTo(0, 0)
})

logo.addEventListener("click", function(){
    window.scrollTo(0, 0)
})
