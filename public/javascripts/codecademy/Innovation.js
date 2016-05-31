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
    var unitHeight = parseInt(windowHeight-50)+'px';
    var headingHeight = parseInt(windowHeight/2)+'px';
    
    initHeight(unitHeight, headingHeight);
}

function initHeight(num, num2){
    $('.header').css({'height':num,'background-size':num+' 100%'});
    $('.heading').css('margin-top',num2);
}