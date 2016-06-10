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
    var headingHeight = parseInt(windowHeight-50)+'px';
    
    initHeight(headingHeight);
}

function initHeight(num){
    $('.carousel-inner').css('height',num);
}