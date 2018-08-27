/////////////////SCROLL DOWN ANIMATION//////////////////////

//DEBOUNCE FUNCTION TO PREVENT CALLING A SCROLL EVENT TOO MANY TIMES
(function(){
  function debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

  var images = document.querySelectorAll('.img');

  function scrollDown(){
    images.forEach(function(img){
      //half way through the image or 50% scrolled
      var slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
      //bottom of img
      var imgBottom = img.offsetTop + img.height;
      //img is scrolled to half, starts appearing
      var halfShown = slideInAt > img.offsetTop;
      var notScrolledPast = window.scrollY < imgBottom;
      //scrolled past return to the starting position if is scrolled past
      if (halfShown && notScrolledPast){
        img.style.opacity = 1;
        img.style.transform = 'trasnform(scale(1)';
        img.style.transform = 'translateY(-2%)';
      } else {
        img.style.opacity =  0;
        //img.style.transform = 'translateY(3%)';
      }
    })
  }
  window.addEventListener('scroll', debounce(scrollDown));
}());

/////////////// NAVBAR//////////////////

////////// STICKY ON SCROLL UP /////////
var navPrevPos = window.pageYOffset;

 function hideNav(){
  var navCurrPos = window.pageYOffset;
  var navbar = document.querySelector('.navbar');
  if (navPrevPos > navCurrPos){
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-70px' ;
  }
  navPrevPos = navCurrPos;
}
window.addEventListener('scroll', hideNav);
/////////////// RESPONSIVE NAV //////////
let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.nav-toggle');
let i = 0;

function openNav(){
  if(i === 0){
    nav.style.display = 'block';
    i++;
  } else if( i === 1){
    nav.style.display = 'none';
    i--;
  }
}
navToggle.addEventListener('click', openNav);

//////////////////////// SHOW CONTENT ////////////////////////
let showBtns = document.querySelectorAll('.show-btn');
let contentOne = document.querySelector('.info-content1');
let contentTwo = document.querySelector('.info-content2');
let hideBtns = document.querySelectorAll('.hide-btn');
let windowWidth = window.innerWidth;

function displayInfo(e){
    let clicked = e.target;
    if (clicked.classList.contains('show1')){
      contentOne.classList.toggle('content-toggle');
      clicked.style.display = 'none';
    } else if(clicked.classList.contains('show2')){
      contentTwo.classList.toggle('content-toggle');
      clicked.style.display = 'none';
    }
  }
function hideInfo(e){
  let clicked = e.target;
  if (clicked.classList.contains('hide1')){
    contentOne.classList.remove('content-toggle');
  } else if(clicked.classList.contains('hide2')){
    contentTwo.classList.remove('content-toggle');
  }
  showBtns.forEach( btn => btn.style.display = 'block');
}

showBtns.forEach( btn => btn.addEventListener('click', displayInfo));
hideBtns.forEach( btn => btn.addEventListener('click', hideInfo));


////////////////////////GALLERY////////////////////////
(function(){
    var images = document.querySelector('.gallery-column');
    var modal = document.querySelector('.modal');
    var modalImg = document.querySelector('.modal-img');
    var closeBtn = document.querySelector('.close');

    function openModal(e){
      if(e.target.className == 'img'){
        var curImg = e.target;
        modal.style.display = 'block';
        //change the source of the image => choose clicked img
        modalImg.src = curImg.src;
      }
    }

    function closeModal(){
      modal.style.display = 'none';
    }

    //click outside the window
    function clickOutside(e){
      if(e.target == modal){
        modal.style.display = 'none';
      }
    }
    images.addEventListener('click',openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click',clickOutside);
  }());
