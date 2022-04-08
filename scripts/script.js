/* 
lighthouse test

price page
price button

*/


function myFunction() {
    /* var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    } */
    const hidNav=document.querySelector('.hidNav');
    hidNav.classList.toggle("visNav");

    const theme=document.querySelector('.toggleb');
    theme.classList.toggle("inVis");
  } 


  


/* for(let i=0; i<images.length;i++){
  images[i].classList.add("hidden");

  console.log(images[i].className);
  if(images[i].className.includes("visible")){
    console.log("visible");
    delete images[i];
    console.log(delete images[i]);
  }
  else{
    console.log("hidden");
  }
}
for(let i=0; i<images.length;i++){
  console.log(images[i].className)
  console.log(i);
} */



function isInViewPort(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    /* console.log(bounding); */
    if (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)/*  &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) */
    ) {
        element.classList.add("visible");
        element.classList.remove("hidden");
        return true;
    } else {
        return false;
    }
}

var images = document.images;





for(let i=0; i<images.length;i++){
  images[i].classList.add("hidden");
}

window.addEventListener('scroll', function (event) {
  for(let i=0; i<images.length;i++){
    if(images[i].className.includes("hidden")){
      isInViewPort(images[i]);
    }

  }
  
}, false);


/* var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
}); */


function themeSwitch() {
  var nav = document.querySelector('nav');
  nav.classList.toggle("darkNav");

  var navH = document.querySelector('.hidNav');
  navH.classList.toggle("darkNavH");

  const nlinks=nav.querySelectorAll('a');
  for(let i=0;i<nlinks.length;i++){
    nlinks[i].classList.toggle("darkNavA");
  }

  var footer = document.querySelector('footer');
  footer.classList.toggle("darkFooter");
  /* const fbutton=footer.querySelector('button');
  fbutton.classList.toggle("darkButton");

  const fbuttonA=fbutton.querySelector('a');
  fbuttonA.classList.toggle("darkButtonA"); */

  
} 

function themeSwitchIndex(){
  //footer
  var footer = document.querySelector('footer');
  const fbutton=footer.querySelector('button');
  fbutton.classList.toggle("darkButton");

  const fbuttonA=fbutton.querySelector('a');
  fbuttonA.classList.toggle("darkButtonA");

  //landing
  var main = document.querySelector('.landing');
  main.classList.toggle("darkLanding");
  //landingbutton
  var lbutton = main.querySelector('button');
  lbutton.classList.toggle("darkButton");
  const lbuttonA=lbutton.querySelector('a');
  lbuttonA.classList.toggle("darkButtonA");

  //gallery
  var gallery = document.querySelector('.gallery');
  gallery.classList.toggle("darkGallery");
}

function themeSwitchAbout(){
  //footer
  var footer = document.querySelector('footer');
  const fbutton=footer.querySelector('button');
  fbutton.classList.toggle("darkButton");

  const fbuttonA=fbutton.querySelector('a');
  fbuttonA.classList.toggle("darkButtonA");


  //landing
  var main = document.querySelector('.landing');
  main.classList.toggle("darkLanding");
  //process
  var process = document.querySelector('.process');
  process.classList.toggle("darkProcess");

  const steps=process.querySelectorAll('.steps');
  for(let i=0;i<steps.length;i++){
    steps[i].classList.toggle("darkSteps");
  }
}

function themeSwitchServices(){
  //footer
  var footer = document.querySelector('footer');
  const fbutton=footer.querySelector('button');
  fbutton.classList.toggle("darkButton");

  const fbuttonA=fbutton.querySelector('a');
  fbuttonA.classList.toggle("darkButtonA");

  
  //landing
  var main = document.querySelector('.landing');
  main.classList.toggle("darkLanding");
  
  const main2 = document.querySelector('.main');
  const priceBtn = main2.querySelector('a');
  priceBtn.classList.toggle("darkPriceButton");
  //serviceBox
  var serviceBox = document.querySelector('.serviceBox');
  serviceBox.classList.toggle("darkServiceBox");

}

function themeSwitchContact(){
  //landing
  const main = document.querySelector('.main');
  main.classList.toggle("darkMain");
  
  const form = document.querySelector('.form');
  form.classList.toggle("darkForm");

  const info = document.querySelector('.info');
  info.classList.toggle("darkInfo");

  const select = document.querySelector('select');
  select.classList.toggle("darkSelect");

  const input = document.querySelectorAll('input');
  for(let i=0;i<input.length;i++){
    input[i].classList.toggle("darkInput");
  }

  const textArea = document.querySelector('textarea');
  textArea.classList.toggle("darkTextarea");



  const icon1 = document.getElementById('fb');
  const icon2 = document.getElementById('insta');

  console.log(icon1.src);
  if(icon1.src.includes("facebookW")){
    icon1.src="assets/facebook.png"
    icon2.src="assets/instagram.png"
  }
  else{
    icon1.src="assets/facebookW.png"
    icon2.src="assets/instagramW.png"
  }
  
  const slider=document.querySelector(".slider");
  slider.classList.toggle("darkSlider");
}

function themeSwitchPrice(){
  //landing
  const main = document.querySelector('.main');
  main.classList.toggle("darkMain");

  var footer = document.querySelector('footer');
  const fbutton=footer.querySelector('button');
  fbutton.classList.toggle("darkButton");

  const fbuttonA=fbutton.querySelector('a');
  fbuttonA.classList.toggle("darkButtonA");
}

function cookieSaver(checkbox){
  if(checkbox.checked==true){
  document.cookie = "theme='dark'"; 
  }
  if(checkbox.checked==false){
    document.cookie = "theme='light'"; 
  }
}

function getCookie(){
  themec=document.cookie;
  /* console.log(themec); */
  return themec;
}

function themeHandler(){
  themeSwitch();

  if ( document.URL.includes("index") ) {
    themeSwitchIndex();
    cookieSaver(checkbox);
  }
  if ( document.URL.includes("home") ) {
    themeSwitchIndex();
    cookieSaver(checkbox);
  }
  if ( document.URL.includes("about") ) {
    themeSwitchAbout();
    cookieSaver(checkbox);
  }
  if ( document.URL.includes("services") ) {
    themeSwitchServices();
    cookieSaver(checkbox);
  }
  if ( document.URL.includes("contact") ) {
    themeSwitchContact();
    cookieSaver(checkbox);
  }
  if ( document.URL.includes("price") ) {
    themeSwitchPrice();
    cookieSaver(checkbox);
  }
}
function alignThemes(){
  var navCheck= document.querySelector('nav');
  navCheck=navCheck.classList.contains("darkNav");
  var event = new Event('change');
  if(getCookie().includes("light") && navCheck){
    console.log("mismatch l");
    /* checkbox.checked=false; */
    /* checkbox.dispatchEvent(event); */
    if(checkbox.checked==true){
      checkbox.click();
    }
    themeHandler();
    
  }
  if(getCookie().includes("dark") && !navCheck){
    console.log("mismatch d");
    /* checkbox.checked=true; */
    /* checkbox.dispatchEvent(event); */
    if(checkbox.checked==false){
      checkbox.click();
    }
    themeHandler();
    
  }
}
var checkbox = document.querySelector("input[type=checkbox]");

getCookie();
alignThemes();

checkbox.addEventListener('change', function() {
  themeHandler();
  /* themeSwitch();

  if ( document.URL.includes("index") ) {
    themeSwitchIndex();
    cookieSaver(checkbox);
    getCookie();
  }
  if ( document.URL.includes("home") ) {
    themeSwitchIndex();
    cookieSaver(checkbox);
    getCookie();
  }
  if ( document.URL.includes("about") ) {
    themeSwitchAbout();
    cookieSaver(checkbox);
    getCookie();
  }
  if ( document.URL.includes("services") ) {
    themeSwitchServices();
    cookieSaver(checkbox);
    getCookie();
  }
  if ( document.URL.includes("contact") ) {
    themeSwitchContact();
    cookieSaver(checkbox);
    getCookie();
  } */


});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  if(getCookie()==""){
    console.log("trig");
    if(checkbox.checked==false){
      checkbox.click();
    }
    var nc= document.querySelector('nav');
    nc=nc.classList.contains("darkNav");
    if(nc=false){
    themeHandler();
    }
  }
  
}