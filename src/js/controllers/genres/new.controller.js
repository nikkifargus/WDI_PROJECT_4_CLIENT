angular
.module('project4')
.controller('GenresNewCtrl', GenresNewCtrl);

GenresNewCtrl.$inject = ['Genre', '$state', 'CurrentUserService'];
function GenresNewCtrl(Genre, $state, CurrentUserService){
  const vm = this;
  vm.NewGenre = NewGenre;
  vm.user = CurrentUserService.currentUser;

  function NewGenre(){
    // vm.genre.createdBy = vm.user;
    Genre
    .save(vm.genre)
    .$promise
    .then(data => {
      console.log(data);
      $state.go('genresIndex');
    });
  }
}
