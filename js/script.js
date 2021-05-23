// time set loader page
setTimeout(function(){
  $('.loader_bg').fadeToggle()
}, 5000);




var w = window.innerWidth;
var h = window.innerHeight;
var check_element = 0;
var collect;
console.log(w,h);
function popupp(){
    check_element = 1;
    var ctxt = setInterval(createText,250)
    setTimeout(() => {
        clearInterval(ctxt);
    }, 10000);
}
function createText(){
    var size = Math.random()*60;
    const section = document.querySelector('#page4');
    const element = document.createElement('span');
    element.style.width = 40+size + 'px';
    element.style.height = 40+size + 'px';
    element.style.fontSize = (10+size)*0.0145+'vw';
    element.style.left = Math.random()*innerWidth + 'px';
    section.appendChild(element);
    if (check_element == 1){
        collect = document.querySelector('#input-comment').value;
        check_element = 0;
        document.querySelector('#input-comment').value = '';
    }
    element.innerHTML = collect;
    setTimeout(() => {
        element.remove();
    }, 5000);
}

window.addEventListener('resize', function(event){
    document.querySelector('#page1').style.height = (h/2.2641-40.00596263)+'vw';
    document.querySelector('#page2').style.height = (h/3.58-0.008733624)+'vw';
    document.querySelector('#page3').style.height = (h/5.581-20.015230245)+'vw';
    document.querySelector('#page4').style.height = (h/3.5573-23.00087145)+'vw';
});
window.addEventListener("load", function(){
    var loading = document.getElementById("loading");
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            loading.style.opacity -= 0.1;
        }, 1000);
        
    }
    setTimeout(() => {
        loading.style.zIndex = `0`;
    }, 2000);
});
var num = 1;
function side_slide(event){showImg(num += event);}

function showImg(event){
    var i;
    const img = document.querySelectorAll(`.image-carousel`);
    const text = document.querySelectorAll(`#text-carousel`);
    
    // num = index value
    if(event > img.length){num = 1;}
    if(event < 1){num = img.length}
    console.log("there are "+ img.length + " pic in this slider"); //check how many pic
    for(i = 0; i < img.length; i++){
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

window.addEventListener('scroll', function(event){
    reveal();
    droptest();
    below();
})
function reveal() {
    var revealers = document.querySelector('.scrolling');
    var plastic = document.querySelector('.plastic-bag');
    var windowheight = window.innerHeight;
    var revealertop = revealers.getBoundingClientRect().top;
    var revealerbottom = revealers.getBoundingClientRect().bottom;
    if (revealertop < windowheight - 350) {
        revealers.style.right =  20+'%';
        plastic.style.left = 20+'%';
        revealers.style.opacity = plastic.style.opacity = 1;
    } else {
        revealers.style.right = plastic.style.left = "";
        revealers.style.opacity = plastic.style.opacity = 0;
    };
    if (revealerbottom < 350) {
        revealers.style.right = plastic.style.left = "";
        revealers.style.opacity = plastic.style.opacity = 0;
    }
}
var check;
function droptest() {
    if (check != 1){
        var drop = document.querySelector(".drop-slide");
        var windowheight = window.innerHeight;
        var top = drop.getBoundingClientRect().top;
        if (top < windowheight - 400 && top > -500) {   
            drop.style.opacity = 1;
            drop.style.position = "fixed";
            check = 1;
        }
        setTimeout(() => {
            drop.remove();
        }, 7000);
    }
}

function below() {
    var revealers = document.querySelector('.check-below');
    var windowheight = window.innerHeight;
    var revealertop = revealers.getBoundingClientRect().top;
    console.log(revealertop, windowheight);
    // var revealerbottom = revealers.getBoundingClientRect().bottom;
    if (revealertop-windowheight <  200) {
        document.querySelector('.background-block').style.display = "flex";
    }
    else{
        document.querySelector('.background-block').style.display = "none";
    }
}






