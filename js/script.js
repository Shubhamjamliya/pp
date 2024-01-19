 // Add an event listner for hamburger
 let ham=document.querySelector(".hamburger");
 let close=document.querySelector(".close")
 
 ham.addEventListener("click", e => {
    document.querySelector("#header").style.left = "0";
    ham.style.display="none"
    close.style.display="block";
})

 // Add an event listner for close
 close.addEventListener("click", e => {
    document.querySelector("#header").style.left = "-120%";
    close.style.display="none";
    ham.style.display="block";
})

//  Hero type effect
let type=new Typed('#changing-text', {
    strings:['Front-end Developer','Programmer','React Developer'],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
})

// Add an Event for header removw when clicked on btn
let a=(Array.from(document.querySelector(".page-nav-btn").getElementsByTagName('li')));
a.forEach(e=>{
    e.addEventListener("click",()=>{
    document.querySelector("#header").style.left = "-120%";
    close.style.display="none";
    ham.style.display="block";
    })
})


let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}





