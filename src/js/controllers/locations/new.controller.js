angular
.module('project4')
.controller('LocationsNewCtrl', LocationsNewCtrl);

LocationsNewCtrl.$inject = ['Location', '$state', 'CurrentUserService'];
function LocationsNewCtrl(Location, $state, CurrentUserService){
  const vm = this;
  vm.NewLocation = NewLocation;
  vm.user = CurrentUserService.currentUser;

  function NewLocation(){
    Location
    .save(vm.location)
    .$promise
    .then(data => {
      console.log(data);
      $state.go('locationsIndex');
    });
  }
}
