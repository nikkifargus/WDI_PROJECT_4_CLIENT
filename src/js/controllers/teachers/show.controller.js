angular
.module('project4')
.controller('TeachersShowCtrl', TeachersShowCtrl);

TeachersShowCtrl.$inject = ['Teacher', '$stateParams'];
function TeachersShowCtrl(Teacher, $stateParams) {
  const vm = this;

  Teacher
  .get({ id: $stateParams.id })
  .$promise
  .then(data => {
    vm.teacher = data;

    filterLocations();
    
  });

  function filterLocations() {
    vm.locations = vm.teacher.locations.filter((location, index, self) => self.findIndex((t) => {
      return t.id === location.id && t.name === location.name;
    }) === index);
  }
}
