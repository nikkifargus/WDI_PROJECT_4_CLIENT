angular
.module('project4')
.controller('GenresEditCtrl', GenresEditCtrl);

GenresEditCtrl.$inject = ['Genre', '$stateParams', '$state'];
function GenresEditCtrl(Genre, $stateParams, $state) {
  const vm = this;
  vm.genre = Genre.get($stateParams);
  vm.update = genresUpdate;
  vm.delete = genresDelete;

  function genresUpdate() {
    Genre
    .update({id: vm.genre.id}, {genre: vm.genre})
    .$promise
    .then(() => $state.go('genresShow', $stateParams));
  }

  function genresDelete() {
    Genre
    .remove({ id: vm.genre.id })
    .$promise
    .then(() => {
      $state.go('genresIndex');
    });
  }
}
