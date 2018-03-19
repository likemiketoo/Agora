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
    
    $('#learnMore').click(function()
    {
        //slides up and away
        $('#splashText').slideUp('normal', function()
        {
            //removes text
            $(splashText).empty();
            
            //Changes text size
            $("#splashText").css(
            {
                fontSize: 18
            });
            
            //Appends new text
            $('#splashText').slideDown('slow', function()
            {
            $(splashText).append('The focus of this project is to enable entrepreneurs to distribute and raise awareness of their services and collect payment in a convenient manner through the mobile application and website. Both will allow for improved advertising of both goods and services on the campus of Norfolk State University where many talented entrepreneurs and students provide services.');
            });
        });
        
    });
    
    //removes splash on click
    $('#servTextHair, #servTextTutor, #servTextNails, #servTextSalon, #servTextShoes, #servTextRepair, #servTextTailor, #servTextProducer, #servTextTrainer').on('click',function(e)
    {
        //slides up then hides div at normal speed
        $('#splashDiv').slideUp('normal', function()
        {
            $('#splashDiv').remove();
        });
     });

    //replace Label on click
    $('#servTextHair').on('click',function(e)
    {
        //slides up then hides div at normal speed
        $('#servLabelDiv').empty();
        $('#servLabelDiv').css(
            {
                fontSize: 65
            });
        $('#servLabelDiv').append('Entrepreneurs');
        $('#servLabelDiv').append('<div class="container" id="servSub">Entrepreneurs offering service</div>');
     });
    

 });