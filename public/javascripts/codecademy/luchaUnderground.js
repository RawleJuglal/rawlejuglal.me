/** Document Ready Functions **/
/********************************************************************/

$( document ).ready(function() {
    getHeight();
    
    $(window).on('resize', function() {
        getHeight();
    });
});

/** Reusable Functions **/
/********************************************************************/

function getHeight(){
    var windowHeight = $(window).height();
    var footerHeight = parseInt(windowHeight-179)+'px';
    if(windowHeight>=1024)
        {
           initHeight(footerHeight); 
        }
    
}

function initHeight(num){
    $('.main').css({"height":num, "background-size":"100% "+num});
}