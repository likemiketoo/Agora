$(document).ready(function(){												
   //Navigation Menu Slider
    $('#nav-expander').on('click',function(e)
    {
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    
    
    $('#nav-close').on('click',function(e)
    {
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });
    
    $('.container-fluid').on('click',function(e)
    {
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });
    
    
    
    
    var $root = $('html, body');
    
    $('a').click(function()
    {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 900);
        return false;
    });
    
    //removes splash on click
    
    $('#servText').on('click',function(e)
    {
        $('#splashDiv').remove();
     });
    
    
    
    $('#learnMore').click(function()
    {
        
        $(splashText).empty();
        $("#splashText").css(
        {
            fontSize: 18
        });
        $(splashText).append('The focus of this project is to enable entrepreneurs to distribute and raise awareness of their services and collect payment in a convenient manner through the mobile application and website. Both will allow for improved advertising of both goods and services on the campus of Norfolk State University where many talented entrepreneurs and students provide services.');
        
    });

 });