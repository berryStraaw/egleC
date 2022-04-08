
function myFunction() {

    const hidNav=document.querySelector('.hidNav');
    hidNav.classList.toggle("visNav");

    const theme=document.querySelector('.toggleb');
    theme.classList.toggle("inVis");
  } 

function isInViewPort(element) {
    var bounding = element.getBoundingClientRect();


    if (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
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
