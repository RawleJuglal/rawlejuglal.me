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
    var headingHeight = parseInt(windowHeight/4)+'px';
    
    initHeight(headingHeight);
}

function initHeight(num){
    $('.btn-index').css('margin-top',num);
}