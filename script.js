$(window).scroll(function(){
  $(".list-group-item").removeClass("active");
  $(".active").parent().addClass("active");
})