angular
  .module('project4')
  .controller('GenresShowCtrl', GenresShowCtrl);

GenresShowCtrl.$inject = ['Genre', '$stateParams'];
function GenresShowCtrl(Genre, $stateParams) {
  const vm = this;

  vm.genre = Genre.get({ id: $stateParams.id });
}
