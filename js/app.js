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
//    
//    $('.container-fluid').on('click',function(e)
//    {
//        e.preventDefault();
//        $('body').removeClass('nav-expanded');
//    });
//    
    
    
    
    var $root = $('html, body');
    
//    $('a').click(function()
//    {
//        $root.animate({
//            scrollTop: $( $.attr(this, 'href') ).offset().top
//        }, 900);
//        return false;
//    });
    
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
                fontSize: 15
            });
            
            //Appends new text
            $('#splashText').slideDown('slow', function()
            {
            $(splashText).append('The focus of this project is to enable entrepreneurs to distribute and raise awareness of their services and collect payment in a convenient manner through the mobile application and website. Both will allow for improved advertising of both goods and services on the campus of Norfolk State University where many talented entrepreneurs and students provide services.');
            });
        });
        
    });
	
	
	var config = 
	{
		apiKey: "AIzaSyBvOEX7dkyhpkCgQmKxVr5uGtnixKeL0aM",
		authDomain: "agora-1521658563641.firebaseapp.com",
		databaseURL: "https://agora-1521658563641.firebaseio.com",
		projectId: "agora-1521658563641",
		storageBucket: "agora-1521658563641.appspot.com",
		messagingSenderId: "991820545565"
	};

	firebase.initializeApp(config);

	var database = firebase.database();
	
	var ref = database.ref("/");
	
	function writeUserData(userId, name, username, email, imageUrl, description)
	{
		firebase.database().ref('users/' + userId).set(
		{
			name: name,
			username: username,
			email: email,
			description: description,
			profile_picture: imageUrl
			
  		});
	}
	
//	var usersRef = ref.child("users");
//	usersRef.set({
//	  Bob: {
//		username: "June 23, 1912",
//		email: "Alan Turing"
//	  },
//	  gracehop: {
//		username: "December 9, 1906",
//		email: "Grace Hopper"
//	  }
//	});
	
	//grabs user info
	$('#submitButton').click(function()
    {
		var usrsName = $("#nameInp").val();
		console.log(usrsName);
		var usrname = $("#usrNameInp").val();
		console.log(usrname);
		var usrEmail = $("#emailInp").val();
		console.log(usrEmail);
		var usrDescr = $("#descrInp").val();
		console.log(usrDescr);
		
		var usersRef = ref.child("users");
		usersRef.update({
			[usrsName]: {
			name: usrsName,
			username: usrname,
			email: usrEmail,
			description: usrDescr
			}
		});
	});
	
	
	
	
	

	//getElement
	var preObject = document.getElementById('object');

	var dbRefObject = firebase.database().ref().child('username');

	//Sync object changes
	dbRefObject.on('value', snap => console.log(snap.val()));
	
	dbRefObject.on('value', snap => {
		servLabelDiv.innerText = JSON.stringify(snap.val())
	});
	

    
    //removes splash on click
//    $('#servTextHair, #servTextTutor, #servTextNails, #servTextSalon, #servTextShoes, #servTextRepair, #servTextTailor, #servTextProducer, #servTextTrainer').on('click',function(e)
//    {
//        //slides up then hides div at normal speed
//        $('#splashDiv').slideUp('normal', function()
//        {
//            $('#splashDiv').remove();
//        });
//		
//		//slides up then hides div at normal speed
//        $('#servLabelDiv').empty();
//		//changes css
//        $('#servLabelDiv').css(
//            {
//                
//            });
//		//
//        $('#servLabelDiv').append('Entrepreneurs');
//        $('#servLabelDiv').append('<div class="container" id="servSub">Entrepreneurs offering service</div>');
//     });
//
//    //replace Label on click
//    $('#servTextHair').on('click',function(e)
//    {
//    	$('#servDivInner').empty();
//		$('#servDivInner').append('<div class="row" id="servRow"> <div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx1"> </div><div class="container" id="barberEx1Text">Bob The Barber </div></a> </div><div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx2"> </div><div class="container" id="barberEx2Text">Big Bro\'s</div></a> </div><div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx3"> </div><div class="container" id="barberEx3Text">Super Kutz </div></a> </div></div><div class="row" id="servRow"> <div class="col-xs-4" id="servCol"> <a> <div class="container" id="barberEx4"> </div><div class="container" id="barberEx4Text">John Cuttington </div></a> </div></div>');
//    });
//	
//	$('#barberEx1').on('click',function(e)
//    {
//		$('#servLabelDiv').empty();
//		$('#servLabelDiv').append('Bob The Barber');
//		
//		$('#servDivInner2').empty();
//	});
//	
//	$('#barberEx2').on('click',function(e)
//    {
//		$('#servLabelDiv').empty();
//		$('#servLabelDiv').append('Big Bro\'s');
//		
//		$('#servDivInner2').empty();
//	});
//	
//	
//	$('#barberEx3').on('click',function(e)
//    {
//		$('#servLabelDiv').empty();
//		$('#servLabelDiv').append('Super Kutz');
//		
//		$('#servDivInner2').empty();
//	});
//	
//	$('#barberEx4').on('click',function(e)
//    {
//		$('#servLabelDiv').empty();
//		$('#servLabelDiv').append('John Cuttington');
//		
//		$('#servDivInner2').empty();
//	});

 });

function onSignIn(googleUser)
{
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	jQuery('#signOut').css({"visibility": "visible"});
}


function signOut()
{
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function()
	{
		console.log('User signed out.');
	});
	jQuery('#signOut').css({"visibility": "hidden"});
 }




//"rules": {
//    ".read": "auth != null",
//    ".write": "auth != null"
