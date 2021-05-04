var w = window.innerWidth;
var h = window.innerHeight;
console.log(w,h);
window.addEventListener('resize', function(event){
    document.querySelector('#page1').style.height = (h/2.2641-40.00596263)+'vw';
    document.querySelector('#page2').style.height = (h/3.58-0.008733624)+'vw';
    document.querySelector('#page3').style.height = (h/5.581-20.015230245)+'vw';
    document.querySelector('#page4').style.height = (h/3.5573-23.00087145)+'vw';
});
// time set loader page
setTimeout(function(){
  $('.loader_bg').fadeToggle()
}, 3000);
////////////

var num = 1;
function side_slide(event){showImg(num += event);}

function showImg(event){
    var i;
    const img = document.querySelectorAll(`.image-carousel`);
    const text = document.querySelectorAll(`#text-carousel`);
    
    
    if(event > img.length){num = 1}
    if(event < 1){num = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.right = '0';
        img[i].style.opacity = '0';
        text[i].style.opacity = '0';
    }

    if(num-1 == 2){
        img[num-1].style.opacity = '1';
        img[num-1].style.right = 32+'%';
    }
    else if(num-1 == 3){
        img[num-1].style.opacity = '1';
        img[num-1].style.right = 33+'%';
    }
    else{
        img[num-1].style.opacity = '1';
        img[num-1].style.right = 35+'%';
    }
    text[num-1].style.opacity = '1';
}

window.addEventListener('scroll', reveal);
reveal();
function reveal() {
    console.log("scrolling");
    var revealers = document.querySelector('.scrolling');
    var plastic = document.querySelector('.plastic-bag');
    var windowheight = window.innerHeight;
    var revealertop = revealers.getBoundingClientRect().top;
    var revealerbottom = revealers.getBoundingClientRect().bottom;
    console.log(revealertop);
    console.log(revealerbottom);
    if (revealertop < windowheight - 350) {
        revealers.style.right =  20+'%';
        plastic.style.left = 20+'%';
        revealers.style.opacity = plastic.style.opacity = 1;
        // revealers[0].classList.add('active');
    } else {
        // revealers[0].classList.remove('active');
        revealers.style.right = plastic.style.left = "";
        revealers.style.opacity = plastic.style.opacity = 0;
    };
    if (revealerbottom < 0 + 350) {
        // revealers[0].classList.remove('active');
        revealers.style.right = plastic.style.left = "";
        revealers.style.opacity = plastic.style.opacity = 0;
    }
} 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }
})

function dropFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// window.addEventListener("scroll", (event) =>{
//     ScrollCheck("block-set");
// });
// function ScrollCheck(test){
//     var coo = document.getElementById(test);
//     var check = coo.getBoundingClientRect();
//     console.log(check.top);
//     if (check.top > h /5 && check.top < (4 * h) / 5) {
//             coo.style.opacity = "100%";
//         } 
//         else if (check.top < h ) {
//             coo.style.opacity = "0%";   
//         }
// }
// alert
function fn1(){
  var str = document.getElementById("text-box2").value;
  alert("ขอบคุณสําหรับความคิดเห็นครับ/ค่ะ คุณ "+str);
}


