// const locomotive = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth:true
// })

const fiximg= document.getElementById("fixedimage");
const elemcont = document.querySelector(".elem-cont");
const elem = document.querySelectorAll(".elem");

elemcont.addEventListener('mouseenter',()=>{
    fiximg.style.display="block"
})

elemcont.addEventListener('mouseleave',()=>{
    fiximg.style.display="none"
})

elem.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        //console.log(e.getAttribute("data-image"))    
         var image= e.getAttribute("data-image")
         console.log(image)
         fiximg.style.background= `url(${image})`
    })
})