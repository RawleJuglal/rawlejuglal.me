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
    var buttonHeight = parseInt(windowHeight/8)+'px';
    
    initHeight(headingHeight, buttonHeight);
}

function initHeight(num, num2){
    $('.main').css('height',num);
    $('.btn-index').css('margin-top', num2);
}