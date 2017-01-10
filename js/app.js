var app = angular.module('Resume',['ngRoute', 'ngAnimate', 'firebase']);
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
	  when('/resume', {
		templateUrl: 'partials/resume.html',
		controller: 'ResumeCtrl'
	  }).
	  /*when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'ContactCtrl'
      }).
      when('/about_us', {
        templateUrl: 'partials/about_us.html',
        controller: 'AboutCtrl'
      }).*/
      otherwise({
        redirectTo: '/about'
      });
  }]);

