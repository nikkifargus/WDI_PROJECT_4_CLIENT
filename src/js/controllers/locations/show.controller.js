angular
  .module('project4')
  .controller('LocationsShowCtrl', LocationsShowCtrl);

LocationsShowCtrl.$inject = ['Location', '$stateParams'];
function LocationsShowCtrl(Location, $stateParams) {
  const vm = this;

  vm.location = Location.get({ id: $stateParams.id });
}
