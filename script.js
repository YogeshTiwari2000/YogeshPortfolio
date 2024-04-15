$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Learner", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});


 function choosePDF() {
      // Trigger click event on hidden file input element
      document.getElementById('pdfInput').click();
    }

    // Function to handle file input change event
    document.getElementById('pdfInput').addEventListener('change', function(event) {
      var file = event.target.files[0];

      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function(event) {
          var pdfData = event.target.result;
          // Open PDF in a new tab or window
          window.open(pdfData, '_blank');
        }
      }
    });
