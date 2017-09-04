angular
  .module('project4')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('lessonsIndex', {
    url: '/lessons',
    templateUrl: '/js/views/lessons/index.html',
    controller: 'LessonsIndexCtrl',
    controllerAs: 'controller'
  })
  .state('lessonsNew', {
    url: '/lessons/new',
    templateUrl: '/js/views/lessons/new.html',
    controller: 'LessonsNewCtrl',
    controllerAs: 'controller'
  })
  .state('lessonsShow', {
    url: '/lessons/:id',
    templateUrl: '/js/views/lessons/show.html',
    controller: 'LessonsShowCtrl',
    controllerAs: 'controller'
  })
  .state('lessonsEdit', {
    url: '/lessons/:id/edit',
    templateUrl: '/js/views/lessons/edit.html',
    controller: 'LessonsEditCtrl',
    controllerAs: 'controller'
  });

  $urlRouterProvider.otherwise('/');
}
