angular
.module('project4')
.controller('GenresIndexCtrl', GenresIndexCtrl);

GenresIndexCtrl.$inject = ['Genre'];
function GenresIndexCtrl(Genre){
  const vm = this;
  genreIndex();

  function genreIndex() {
    vm.genres = Genre.query();

  }


}
