
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'pages/welcome/welcome.html',
            controller: 'ctrl_welcome'
        });
    $urlRouterProvider.otherwise('/welcome');
}]);