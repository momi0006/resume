var app = angular.module('Resume',['ngRoute', 'ngAnimate', 'firebase', 'angular-google-analytics']);

app.config(['AnalyticsProvider', function (AnalyticsProvider) {
   // Add configuration code as desired
   AnalyticsProvider.setAccount('UA-90341310-1');  //UU-XXXXXXX-X should be your tracking code
}]).run(['Analytics', function(Analytics) { }]);

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
}]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
	    when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      }).
    /*when('/about_us', {
        templateUrl: 'partials/about_us.html',
        controller: 'AboutCtrl'
      }).*/
      otherwise({
        redirectTo: '/about'
      });
  }]);

  app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(ID) {
		// This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var startY = currentYPosition();
        var stopY = elmYPosition(ID); //value to set where is the end point to stop. Top margin 160px;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 50); //adjust the scrolling speed.
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(ID) {
            var elm = document.getElementById(ID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});
app.controller('ScrollCtrl', ['anchorSmoothScroll', '$location', '$scope',
  function (anchorSmoothScroll, $location, $scope) {
    $scope.gotoStep = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
		
		 $location.hash(x);
		 anchorSmoothScroll.scrollTo(x);
      } else {
        //$anchorScroll();
		anchorSmoothScroll.scrollTo(x);
      }
    };

    $scope.closeNav = function () {
      document.getElementById("myNav").style.width = "0%";
    }
  }

  
]);