
     /*==========================================
      scroll to Top
      ==============================================*/
      (function(){

        var link;
            toggleScrollToTopLink = function(){

              if($("body").scrollTop() > 0 ||
          $("html").scrollTop() > 0) {
                       link.fadeIn(400);
          }
          else{
            link.fadeOut(400);
          }
        };

    $(document).ready(function(){

          link = $(".scroll-to-top-link");

          $(window).scroll(toggleScrollToTopLink);

          toggleScrollToTopLink();

          link.on("click", function(){
            $("body").animate({scrollTop: 0});
            $("html").animate({scrollTop: 0});
          });

      });

  })();
      /*==========================================
      hamburger
      ==============================================*/
$("#hamburger").click(function() {

   $(this).toggleClass("is-active");
   $(".mobile-menu").toggle();

});



/*============================================
	smooth scrolling
	==============================================*/
  $(document).ready(function(){

   $("a").on('click', function(event) {


     if (this.hash !== "") {

       event.preventDefault();

       var hash = this.hash;

       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){

         window.location.hash = hash;
       });
     };
   });
 });
 /*==========================================
 Nav
 ==============================================*/
 var navbar = document.getElementById('Navbar');

 var sticky = navbar.offsetTop;

 console.log(sticky);



  function checkPostion(){

    if (window.pageYOffset >= sticky) {
       navbar.classList.add("fix-my-nav");
    } else{
        navbar.classList.remove("fix-my-nav");
    }
  }

  window.onscroll = function(){
      checkPostion();
  }
 /*============================================
	Type Words
	==============================================*/

  var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #666 }";
  document.body.appendChild(css);
};
/*
 Type Words
 ==============================================*/
