// NAVIGATION
const scrollToForm = () => {
    document.querySelector('.form').scrollIntoView({behavior:"smooth"})
}
const scrollToTop = () => {
    document.querySelector('.header').scrollIntoView({behavior:"smooth"})
}

// RANDOM INTEGER
document.querySelector('#randomInteger').innerHTML = Math.floor(Math.random() * 9) + 2

// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// FORM SUBMISSION
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelector('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.classList.add('visible');
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        if (requiredFields.classList.contains('visible')) {
            requiredFields.classList.remove('visible');
        }
    });
}

// PERCENT COUNTDOWN
(function(){
    let counter = document.querySelectorAll('.counter');
    let limit = 0;
    window.addEventListener('scroll', function(){  
      if( limit == counter.length ){ return; }
      for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top;
        let win = window.innerHeight - 60;
        if( pos < win && counter[i].dataset.stop === "0" ){
          counter[i].dataset.stop = 1;
          let x = 0;
          limit++;
          let int = setInterval(function(){
            x = x + Math.ceil( counter[i].dataset.to / 50 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 60);
        }
      }
    });
})();

// RANGE SLIDER
$(document).ready(function () {
	$(function () {
		let curCurency = '<span id="curency"> AUD</span>';
		$(".js-range-slider").ionRangeSlider({
			skin: "round",
			min: 200,
			max: 2000,
			from: 1000,
			max_postfix: "+",
			postfix: " AUD",
			grid: true,
			onStart: function (data) {
				$("#calcResult").html(
					Math.round(data.from * 23 + data.from) + curCurency,
				);
			},
			onChange: function (data) {
				$("#calcResult").html(
					Math.round(data.from * 23 + data.from) + curCurency,
				);
			},
		});
	});
});



