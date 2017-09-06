angular
  .module('project4')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: '/js/views/landing.html'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/js/views/home.html'
  })
  .state('add', {
    url: '/add',
    templateUrl: '/js/views/add.html'
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
  })
  .state('teachersIndex', {
    url: '/teachers',
    templateUrl: '/js/views/teachers/index.html',
    controller: 'TeachersIndexCtrl',
    controllerAs: 'controller'
  })
  .state('teachersNew', {
    url: '/teachers/new',
    templateUrl: '/js/views/teachers/new.html',
    controller: 'TeachersNewCtrl',
    controllerAs: 'controller'
  })
  .state('teachersShow', {
    url: '/teachers/:id',
    templateUrl: '/js/views/teachers/show.html',
    controller: 'TeachersShowCtrl',
    controllerAs: 'controller'
  })
  .state('teachersEdit', {
    url: '/teachers/:id/edit',
    templateUrl: '/js/views/teachers/edit.html',
    controller: 'TeachersEditCtrl',
    controllerAs: 'controller'
  })
  .state('locationsIndex', {
    url: '/locations',
    templateUrl: '/js/views/locations/index.html',
    controller: 'LocationsIndexCtrl',
    controllerAs: 'controller'
  })
  .state('locationsNew', {
    url: '/locations/new',
    templateUrl: '/js/views/locations/new.html',
    controller: 'LocationsNewCtrl',
    controllerAs: 'controller'
  })
  .state('locationsShow', {
    url: '/locations/:id',
    templateUrl: '/js/views/locations/show.html',
    controller: 'LocationsShowCtrl',
    controllerAs: 'controller'
  })
  .state('locationsEdit', {
    url: '/locations/:id/edit',
    templateUrl: '/js/views/locations/edit.html',
    controller: 'LocationsEditCtrl',
    controllerAs: 'controller'
  })
  .state('genresIndex', {
    url: '/genres',
    templateUrl: '/js/views/genres/index.html',
    controller: 'GenresIndexCtrl',
    controllerAs: 'controller'
  })
  .state('genresNew', {
    url: '/genres/new',
    templateUrl: '/js/views/genres/new.html',
    controller: 'GenresNewCtrl',
    controllerAs: 'controller'
  })
  .state('genresShow', {
    url: '/genres/:id',
    templateUrl: '/js/views/genres/show.html',
    controller: 'GenresShowCtrl',
    controllerAs: 'controller'
  })
  .state('genresEdit', {
    url: '/genres/:id/edit',
    templateUrl: '/js/views/genres/edit.html',
    controller: 'GenresEditCtrl',
    controllerAs: 'controller'
  })
  .state('postsIndex', {
    url: '/posts',
    templateUrl: '/js/views/posts/index.html',
    controller: 'PostsIndexCtrl',
    controllerAs: 'controller'
  })
  .state('postsNew', {
    url: '/posts/new',
    templateUrl: '/js/views/posts/new.html',
    controller: 'PostsNewCtrl',
    controllerAs: 'controller'
  })
  .state('postsShow', {
    url: '/posts/:id',
    templateUrl: '/js/views/posts/show.html',
    controller: 'PostsShowCtrl',
    controllerAs: 'controller'
  })
  .state('postsEdit', {
    url: '/posts/:id/edit',
    templateUrl: '/js/views/posts/edit.html',
    controller: 'PostsEditCtrl',
    controllerAs: 'controller'
  })
  .state('usersNew', {
    url: '/users/new',
    templateUrl: '/js/views/users/new.html',
    controller: 'UsersNewCtrl',
    controllerAs: 'controller'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'controller'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'controller'
  });

  $urlRouterProvider.otherwise('/');
}
