//var usrMail;
//Google Login system
function onSignIn(googleUser)
{
	var profile = googleUser.getBasicProfile();
	//console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	//console.log('Name: ' + profile.getName());
	//console.log('Image URL: ' + profile.getImageUrl());
	//console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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

//Sign out function
function signOut()
{
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function()
	{
		console.log('User signed out.');
	});
	jQuery('#signOut').css({"visibility": "hidden"});
}

//Everything in the function is triggered when the page is done loading 
$(document).ready(function (){							
	//Permanent variables that sustain through browser changes
	var usrMail = localStorage.getItem("usrMail");
	var usrNm = localStorage.getItem("usrNm");
	var slctdVendor = localStorage.getItem("slctdVendor");
	
   //Navigation Menu slider animation
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
            
            //Appends new text to learn more
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
	var dbRefObjecte = ref.child('emails');
	var dbRefObjectu = ref.child('usernames');
	var dbRefObjectn = ref.child('names');
	var dbRefObjectd = ref.child('descriptions');
	var dbRefObjectp = ref.child('profilePictures');
	
	
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
		console.log(current);
		
	});
	
	$('#servTextTutor').click(function()
    {
		console.log("Tutor Selected");
		//ref.update({
		//})
		current = 'Tutors';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextNails').click(function()
    {
		console.log("Nails Selected");
		//ref.update({
		//})
		current = 'Nail Techs';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextShoes').click(function()
    {
		console.log("Shoes Selected");
		//ref.update({
		//})
		current = 'Shoe Restoration';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextBeauty').click(function()
    {
		console.log("Beauty Selected");
		//ref.update({
		//})
		current = 'Beauty';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextRepair').click(function()
    {
		console.log("Repair Selected");
		//ref.update({
		//})
		current = 'Repair';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextTailor').click(function()
    {
		console.log("Tailor Selected");
		//ref.update({
		//})
		current = 'Tailor';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextProducer').click(function()
    {
		console.log("Producer Selected");
		//ref.update({
		//})
		current = 'Producers';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	$('#servTextTrainer').click(function()
    {
		console.log("Trainer Selected");
		//ref.update({
		//})
		current = 'Trainers';
		localStorage.setItem("current", current);
		current = localStorage.getItem("current");
		console.log(current);
		
	});
	
	localStorage.setItem("current", current);
	current = localStorage.getItem("current");
	console.log(current);
	
	//Dynamically updates div according to selected category
	$(function()
	{
  		if($('body').is('.page2'))
		{
			var usrArray = [];
			ref.child(current).child('usernames').on('child_added', function(snapshot, prevChildKey)
			{
				var newPost = snapshot.val();
				console.log("Username: " + newPost.username);
				
				//interates through strings, updating divs with each change
				temp = temp +1;
				var tempString = temp.toString();
				var newString = "entre" + tempString + 'Text';

				console.log(newString);		

				//document.getElementById(newString).innerText = JSON.stringify(newPost.username);
				
				//var jqNp = $((newPost.username);
				$('#' + newString).append(newPost.username);
				
				
				usrArray[temp - 1] = newPost.username;
				
			
				ref.child(current).child('profileImgUrls').child(newPost.username).on('child_added', function(snapshot, prevChildKey)
				{
				
					var testImg = snapshot.val();
					//console.log("******" + testImg);

					var picString = "entre" + tempString;

					$('#' + picString).css(
						'background-image', 'url(' + testImg + ')');
				});
				//ref.child(current).child('users').child(newPost.username).child('profile');
				return usrArray;

			});
		
			
			

			ref.child(current).child('usernames').on('child_removed', function(snapshot, prevChildKey)
			{
				var newPost = snapshot.val();
				console.log("Username: " + newPost.username);

				temp = temp +1;
				var tempString = temp.toString();
				var newString = "entre" + tempString + 'Text';

				console.log(newString);		

				document.getElementById(newString).textContent += newPost.username;

			});
			
			
			localStorage.setItem("usrArray", JSON.stringify(usrArray));
			
			usrArray = JSON.parse(localStorage.getItem("usrArray"));
				
			console.log(usrArray);
			
			
			
			$('#entre1').click(function(){
				
				slctdVendor = usrArray[0];
				localStorage.setItem("slctdVendor", slctdVendor);
				slctdVendor = localStorage.getItem("slctdVendor");
				console.log(slctdVendor);
			});
			
			$('#entre2').click(function(){
				
				slctdVendor = usrArray[1];
				localStorage.setItem("slctdVendor", slctdVendor);
				slctdVendor = localStorage.getItem("slctdVendor");
				console.log(slctdVendor);
			});
			
			$('#entre3').click(function(){
				
				slctdVendor = usrArray[2];
				localStorage.setItem("slctdVendor", slctdVendor);
				slctdVendor = localStorage.getItem("slctdVendor");
				console.log(slctdVendor);
			});
			
			$('#entre4').click(function(){
				
				slctdVendor = usrArray[3];
				localStorage.setItem("slctdVendor", slctdVendor);
				slctdVendor = localStorage.getItem("slctdVendor");
				console.log(slctdVendor);
			});
			$('#entre5').click(function(){
				
				slctdVendor = usrArray[4];
				localStorage.setItem("slctdVendor", slctdVendor);
				slctdVendor = localStorage.getItem("slctdVendor");
				console.log(slctdVendor);
			});
		
			
  		}
	});
	
	$(function()
	{
		if($('body').is('.page3'))
		{
			ref.child(current).child('usernames').child(slctdVendor).on('child_added', function(snapshot, prevChildKey)
			{
				var info = snapshot.val();
				console.log(info);
				
				document.getElementById('servLabelDiv').innerText = JSON.stringify(info);
			});
			
			ref.child(current).child('descriptions').child(slctdVendor).on('child_added', function(snapshot, prevChildKey)
			{
				var descr = snapshot.val();
				console.log(descr);
				
				document.getElementById('descrDiv').innerText = JSON.stringify(descr);
			});
		}
	});
	
	$(function()
	{
  		if($('body').is('.page4'))
		{
			//Updates email input with user's current email
			document.getElementById('emailInp').value = usrMail;
			document.getElementById('nameInp').value = usrNm;
  		}
	});
	

	
	
	function writeUserData(userId, name, username, email, imageUrl, description, category)
	{
		database.ref('/').set(
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
		
		//var storageRef = storage.ref('profile_pictures/' + usrPic.name);
		
		//storageRef.put(usrPic);
		return usrPic;
	});
	
	
	
	
	//grabs user info
	$('#submitButton').click(function()
    {
				
		var categ = $("#FormControlSelect1").val();
		//console.log(categ);
		var usrsName = $("#nameInp").val();
		//console.log(usrsName);
		var usrname = $("#usrNameInp").val();
		//console.log(usrname);
		var usrEmail = $("#emailInp").val();
		//console.log(usrEmail);
		var usrDescr = $("#descrInp").val();
		
		
		//console.log(usrDescr);
		//var usrImg = $("#fileSelect").val();
		//console.log("Image!!!!" + usrImg);
		
		//var usrImg = $("fileSelect").target.files[0]; 
		
		//var storageRef = storage.ref('profile_pictures/' + usrImg.name);
		
		//var upl = storageRef.put(usrImg);
		//var mountainsRef = storageRef.child(usrImg);
		
//		var usersRef = ref.child(categ);
//		usersRef.update({
//			[usrname]: {
//			name: usrsName,
//			username: usrname,
//			email: usrEmail,
//			description: usrDescr
//			}
//		});
		
		ref.child(categ).child('emails').update({
			[usrname]: {
			email: usrEmail
			}
		});
		
		ref.child(categ).child('names').update({
			[usrname]: {
			name: usrsName
			}
		});
		ref.child(categ).child('descriptions').update({
			[usrname]: {
			description: usrDescr
			}
		});
		ref.child(categ).child('usernames').update({
			[usrname]: {
			username: usrname
			}
		});
		
	});
	
	$('#submitButton').on('click', function(e)
    {
		if(typeof usrPic != 'undefined')
		{
			e.preventDefault();
			console.log(usrPic);

			var storageRef = storage.ref('profile_pictures/' + usrPic.name);

			storageRef.put(usrPic).then(function(){

				var categ = $("#FormControlSelect1").val();
				var usrname = $("#usrNameInp").val();
				//alert("Uploaded!");
				//Adds profile pcture url to realtime database
				storageRef.getDownloadURL().then(function(url)
				{
					console.log("Picture Url!!!!!");
					console.log(url);

					ref.child(categ).child('profileImgUrls').update({
						[usrname]: {
						profile_picture: url
						}
					});

				});
				alert("Uploaded!");
			});
		}
		else	
		{
			var categ = $("#FormControlSelect1").val();
			var usrname = $("#usrNameInp").val();
			ref.child(categ).child('profileImgUrls').update({
				[usrname]: {
				profile_picture: 'https://firebasestorage.googleapis.com/v0/b/agora-1521658563641.appspot.com/o/profile_pictures%2FagoraPlaceholder.png?alt=media&token=6d30128d-d3e5-4c9d-a05f-0be5ee727378'
				}
			});
			alert("Uploaded!");
		}
		
	});
});

