
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
 var navbar = document.getElementById('container nav-ctn');

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

