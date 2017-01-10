app.controller('AboutCtrl', function($scope, $http, $firebaseObject){
	/*var storage = firebase.storage();
	var pathReference = storage.ref('main-image2.jpg');
	pathReference.getDownloadURL().then(function(url) {
	 // `url` is the download URL for 'images/stars.jpg'


	// `url` is the download URL for 'images/stars.jpg'

	  // This can be downloaded directly:
	  var xhr = new XMLHttpRequest();
	  xhr.responseType = 'blob';
	  xhr.onload = function(event) {
	    var blob = xhr.response;
	  };
	  xhr.open('GET', url);
	  xhr.send();

	  // Or inserted into an <img> element:
	  var img = document.getElementById('myimg');
	  img.src = url;
	}).catch(function(error) {
	  // Handle any errors
	});*/
  
  var database = firebase.database().ref('/Technologies/');
  database.on('value', function(snap){
    this.techUrl = [];
    for(var key in snap.val()){
      var technology = snap.val()[key].name;
      firebase.storage().ref('/Technologies/'+ technology +'.png').getDownloadURL().then(function(url){
        

        // Or inserted into an <img> element:
        
      });
    }
  });
  $firebaseObject(firebase.database().ref('/Technologies/')).$loaded().then(function(data){
    data.$bindTo($scope, "data");

  });


  /*firebase.storage().ref('/Technologies/JavaScript.png').getDownloadURL().then(function(url){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element:
    console.log(url);
  });*/
  
});