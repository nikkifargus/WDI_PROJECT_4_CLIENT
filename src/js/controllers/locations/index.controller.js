angular
.module('project4')
.controller('LocationsIndexCtrl', LocationsIndexCtrl);

LocationsIndexCtrl.$inject = ['Location'];
function LocationsIndexCtrl(Location){
  const vm = this;
  locationIndex();

  function locationIndex() {
    vm.locations = Location.query();

  }


}
