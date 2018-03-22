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
		
		//slides up then hides div at normal speed
        $('#servLabelDiv').empty();
		//changes css
        $('#servLabelDiv').css(
            {
                
            });
		//
        $('#servLabelDiv').append('Entrepreneurs');
        $('#servLabelDiv').append('<div class="container" id="servSub">Entrepreneurs offering service</div>');
     });

    //replace Label on click
    $('#servTextHair').on('click',function(e)
    {
    	$('#servDivInner').empty();
		$('#servDivInner').append('<div class="row" id="servRow"> <div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx1"> </div><div class="container" id="barberEx1Text">Bob The Barber </div></a> </div><div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx2"> </div><div class="container" id="barberEx2Text">Big Bro\'s</div></a> </div><div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx3"> </div><div class="container" id="barberEx3Text">Super Kutz </div></a> </div></div><div class="row" id="servRow"> <div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx4"> </div><div class="container" id="barberEx4Text">John Cuttington </div></a> </div></div>');
    });
	
	$('#barberEx1').on('click',function(e)
    {
		$('#servLabelDiv').empty();
		$('#servLabelDiv').append('Bob The Barber');
		
		$('#servDivInner2').empty();
	});
	
	$('#barberEx2').on('click',function(e)
    {
		$('#servLabelDiv').empty();
		$('#servLabelDiv').append('Big Bro\'s');
		
		$('#servDivInner2').empty();
	});
	
	
	$('#barberEx3').on('click',function(e)
    {
		$('#servLabelDiv').empty();
		$('#servLabelDiv').append('Super Kutz');
		
		$('#servDivInner2').empty();
	});
	
	$('#barberEx4').on('click',function(e)
    {
		$('#servLabelDiv').empty();
		$('#servLabelDiv').append('John Cuttington');
		
		$('#servDivInner2').empty();
	});

 });

