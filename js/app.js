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
    

 });