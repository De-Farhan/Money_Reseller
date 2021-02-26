
/*-----------preloader js start------------*/
setTimeout(function(){
  $("#preloader").fadeOut();
}, 3000);
/*-----------preloader js end------------*/

/*-----------vano box js start------------*/
$(document).ready(function(){
    $('#main_content .content_wrapper .venobox').venobox(); 
  });
/*-----------vano box js end------------*/

/*-----------to bottom js start------------*/
$(window).on("scroll",function(){
  var scrollamount = $(window).scrollTop();
  if(scrollamount >= 780){
    $(".to_top").addClass("fixed_to_top");
  }
  else{
    $(".to_top").removeClass("fixed_to_top");
  }
});
/*-----------to bottom js end------------*/


