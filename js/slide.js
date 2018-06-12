$(document).ready(function() {
    var firstInd = $("nav li:first-child").children('a');
    var lastInd = $("nav li:last-child").children('a');
    var slide1Active = $(".slide1").is(":visible");
    if (slide1Active == true) {
      $("#wrapper").removeClass("active");
    }
    $(".more,.changetext,.slide2,.text2").hide();

    $(".downArrow").click(function() {
       gotoSlide2();
    });

    $(".more").click(function() {
      gobackSlide1();
    });

    //For Slide 1
    function gobackSlide1(){
        $("#wrapper").removeClass();
        $(".more,.slide2").hide();
        $(".slide1").fadeIn(300);
        $(".downArrow").show();
    }

    //For Slide 2
    function gotoSlide2(){
        $(".slide1,.text2 ,.downArrow").hide();
        $(".slide2").fadeIn(300);
        $(".more,.text").show();
        $(".indicatorgrey,.indicatorblue").addClass("current");
        screenDetect()
    }

    //For grey indicator 
    $(".indicatorgrey").click(function() {
        var currentText = $(this).hasClass("current");
        var slide1Active = $(".slide1").is(":visible");
        if (currentText == true) {
          // alert("hasclass")
          $(this).removeClass("current");
          $(".indicatorblue").removeClass("current");
          $(".overlaytext").show();
          $(".changetext").hide();
          if (slide1Active == false) {
            $(".text").hide();
            $(".text2").show();
          }
        }else{
          $(this).addClass("current");
          $(".indicatorblue").addClass("current");
          $(".overlaytext").hide();
          $(".changetext").show();
          if (slide1Active == false) {
            $(".text").show();
            $(".text2").hide();
          }
        }
    });

    //For blue indicator 
    $(".indicatorblue").click(function() {
      var currentText = $(this).hasClass("current");
      var slide1Active = $(".slide1").is(":visible")
        if (currentText == true) {
          $(this).addClass("current");
          $(".indicatorgrey").addClass("current");
          $(".overlaytext").hide();
          $(".changetext").show();
          //for second time
          if (slide1Active == false) {
            $(".text").fadeOut();
            $(".text").fadeIn();
          }
          else{
            $(".changetext").fadeOut();
            $(".changetext").fadeIn();
          }
        }else{
          if (slide1Active == false) {
            $(".text2").fadeOut();
            $(".text2").fadeIn();
          }else{
            $(".overlaytext").fadeOut();
            $(".overlaytext").fadeIn();
          }
        }
    });

  //For window resize
  $(window).resize(function() {
    if (slide1Active == true) {
      screenDetect();
    }
  });

  //For screen size detedcted 
  function screenDetect() {
      var documentWidth = $(document).width();

      if (window.matchMedia('screen and (min-width: 1280px)').matches ||  documentWidth > 1280)  {
          loadBackgroundImage('lg');
      }

      if (window.matchMedia('screen and (min-device-width: 680px) and (max-device-width: 1024px)').matches || ( documentWidth < 1280 && documentWidth > 680)) {
          loadBackgroundImage('md');
      }

      if (window.matchMedia('screen and (min-device-width: 320px) and (max-device-width: 680px)').matches | documentWidth < 680 ) {
          loadBackgroundImage('sm');
      }

      function loadBackgroundImage(screenType) {
          var slide1Active = $(".slide1").is(":visible");
          console.log(slide1Active)
          $('#wrapper').removeClass();
          $('#wrapper').addClass('background-' + screenType + '-image');
          if (screenType === 'sm' && slide1Active == false) {
            $("#wrapper").addClass("active");
          }else if(slide1Active == true){
            $("#wrapper").removeClass();
          }
      }
  };
});

