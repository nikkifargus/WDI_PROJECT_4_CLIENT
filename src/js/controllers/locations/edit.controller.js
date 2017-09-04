angular
.module('project4')
.controller('LocationsEditCtrl', LocationsEditCtrl);

LocationsEditCtrl.$inject = ['Location', '$stateParams', '$state'];
function LocationsEditCtrl(Location, $stateParams, $state) {
  const vm = this;
  vm.location = Location.get($stateParams);
  vm.update = locationsUpdate;
  vm.delete = locationsDelete;

  function locationsUpdate() {
    Location
    .update(vm.location)
    .$promise
    .then(() => $state.go('locationsShow', $stateParams));
  }

  function locationsDelete() {
    Location
    .remove({ id: vm.location._id })
    .$promise
    .then(() => {
      $state.go('locationsIndex');
    });
  }
}
