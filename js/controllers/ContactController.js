app.controller('ContactCtrl', function($scope, $http, $firebaseObject){
	$firebaseObject(firebase.database().ref('/About/')).$loaded().then(function(data){
        console.log(data);
        data.$bindTo($scope, "about");
    });
});