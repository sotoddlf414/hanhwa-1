$(function(){


$('a').click(function(event){
        event.preventDefault();
});

// GNB-MENU
// ----------------------------------------------------------
$('.gnbItem').click(function(){
    $('.gnb-menu').addClass('on');



});

$('.closeBtn, section').click(function(){
    $('.gnb-menu').removeClass('on');
})
// ----------------------------------------------------------

$(window).scroll(function(){

var scrollNow = $(window).scrollTop();

if(scrollNow >= 300){
    $('.gnb').addClass('color');
}
else{
    $('.gnb').removeClass('color');
}


})





});