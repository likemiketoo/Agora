//var usrMail;

function onSignIn(googleUser)
{
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	jQuery('#signOut').css({"visibility": "visible"});
	
	//pass email to main function
	var usrMail = profile.getEmail();
	var usrNm = profile.getName();
	
	localStorage.setItem("usrMail", usrMail);
	localStorage.setItem("usrNm", usrNm);
	
	usrMail = localStorage.getItem("usrMail");
	usrNm = localStorage.getItem("usrNm");
	//console.log("Inital " + usrMail);
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


$(document).ready(function (){							
	var usrMail = localStorage.getItem("usrMail");
	var usrNm = localStorage.getItem("usrNm");
	
   //Navigation Menu Slider
	//console.log("WORKING " + usrml);
	
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

    //Updates Learn More div on click
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
	var storage = firebase.storage();
	

	
	var ref = database.ref("/");
	var dbRefObject = ref.child('users');
	var Barbers = ref.child('Barbers');
	var barberUsers = Barbers.child('users');
	
	
	
	//Sync object changes
	//unames.on('value', snap => console.log(snap.val()));
	function validate(googleUser)
	{
		var profile = googleUser.getBasicProfile();
		console.log('Da Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	};
	
	
	var temp = 0;
	var current = localStorage.getItem("current");
	
	//*********************//
	//Changes selected category
	//*********************//
	$('#servTextBarber').click(function()
    {
		console.log("Barber Selected");
		//ref.update({
		//})
		current = 'Barbers';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextTutor').click(function()
    {
		console.log("Tutor Selected");
		//ref.update({
		//})
		current = 'Tutors';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextNails').click(function()
    {
		console.log("Nails Selected");
		//ref.update({
		//})
		current = 'Nail Techs';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextShoes').click(function()
    {
		console.log("Shoes Selected");
		//ref.update({
		//})
		current = 'Shoe Restoration';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextBeauty').click(function()
    {
		console.log("Beauty Selected");
		//ref.update({
		//})
		current = 'Beauty';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextRepair').click(function()
    {
		console.log("Repair Selected");
		//ref.update({
		//})
		current = 'Repair';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextTailor').click(function()
    {
		console.log("Tailor Selected");
		//ref.update({
		//})
		current = 'Tailor';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextProducer').click(function()
    {
		console.log("Producer Selected");
		//ref.update({
		//})
		current = 'Producers';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	$('#servTextTrainer').click(function()
    {
		console.log("Trainer Selected");
		//ref.update({
		//})
		current = 'Trainers';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		//console.log(current);
		
	});
	
	localStorage.setItem("current", current);
	current = localStorage.getItem("current");
	console.log(current);
	

	//Dynamically updates div according to database
	ref.child(current).child('users').on('child_added', function(snapshot, prevChildKey)
	{
		var newPost = snapshot.val();
		console.log("Username: " + newPost.username);

		temp = temp +1;
		var tempString = temp.toString();
		var newString = "entre" + tempString + 'Text';

		console.log(newString);		

		document.getElementById(newString).innerText = JSON.stringify(newPost.username);

	});

	barberUsers.on('child_removed', function(snapshot, prevChildKey)
	{
		var newPost = snapshot.val();
		console.log("Username: " + newPost.username);

		temp = temp +1;
		var tempString = temp.toString();
		var newString = "entre" + tempString + 'Text';

		console.log(newString);		

		document.getElementById(newString).innerText = JSON.stringify(newPost.username);

	});
	
	//Updates email input with user's current email
	document.getElementById('emailInp').value = usrMail;
	document.getElementById('nameInp').value = usrNm;

	
	
	function writeUserData(userId, name, username, email, imageUrl, description, category)
	{
		database.ref('users/').set(
		{
			category: category,
			name: name,
			username: username,
			email: email,
			description: description,
			profile_picture: imageUrl
			
  		});
	}
	
	
	
	var uploadBtn = document.getElementById('fileSelect');
	var usrPic;
	$('#fileSelect').on('change', function(e){
		usrPic = e.target.files[0];
		
		console.log(usrPic);
		
		var storageRef = storage.ref('profile_pictures/' + usrPic.name);
		
		storageRef.put(usrPic);
	});
	
	
	
	
	//grabs user info
	$('#submitButton').click(function()
    {
		var categ = $("#FormControlSelect1").val();
		console.log(categ);
		var usrsName = $("#nameInp").val();
		//console.log(usrsName);
		var usrname = $("#usrNameInp").val();
		//console.log(usrname);
		var usrEmail = $("#emailInp").val();
		//console.log(usrEmail);
		var usrDescr = $("#descrInp").val();
		
		
		$('#fileSelect').val(function(e){
			usrPic = e.target.files[0];

			console.log(usrPic);

			var storageRef = storage.ref('profile_pictures/' + usrPic.name);

			storageRef.put(usrPic);
		});
		
		//console.log(usrDescr);
		//var usrImg = $("#fileSelect").val();
		//console.log("Image!!!!" + usrImg);
		
		//var usrImg = $("fileSelect").target.files[0]; 
		
		//var storageRef = storage.ref('profile_pictures/' + usrImg.name);
		
		//var upl = storageRef.put(usrImg);
		//var mountainsRef = storageRef.child(usrImg);
		
		var usersRef = ref.child(categ).child('users');
		usersRef.update({
			[usrname]: {
			name: usrsName,
			username: usrname,
			email: usrEmail,
			description: usrDescr
			}
		});
//		email: profile.getEmail()
	});
	
	
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
	


});





//    
//    $('.container-fluid').on('click',function(e)
//    {
//        e.preventDefault();
//        $('body').removeClass('nav-expanded');
//    });
//    
    
//var $root = $('html, body');
//    $('a').click(function()
//    {
//        $root.animate({
//            scrollTop: $( $.attr(this, 'href') ).offset().top
//        }, 900);
//        return false;
//    });

//"rules": {
//    ".read": "auth != null",
//    ".write": "auth != null"
