// $(window).scroll(function(){
//   $(".list-group-item").removeClass("active");
//   $(".active").parent().addClass("active");
// })


function colorItem () {
  console.log(this);
  $('.list-group-item').removeClass('active');
  $(this).addClass('active');
}

$('.list-group-item').click(colorItem);