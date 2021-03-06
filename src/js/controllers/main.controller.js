angular
.module('project4')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['CurrentUserService', '$rootScope', '$state', 'Teacher', 'Genre', 'Location'];
function MainCtrl(CurrentUserService, $rootScope, $state, Teacher, Genre, Location) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    vm.teacher = Teacher.query();
    vm.genre = Genre.query();
    vm.location = Location.query();

    vm.logout = () => {
      CurrentUserService.removeUser();
    };
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

}
