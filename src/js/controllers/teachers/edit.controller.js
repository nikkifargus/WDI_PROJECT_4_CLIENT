angular
.module('project4')
.controller('TeachersEditCtrl', TeachersEditCtrl);

TeachersEditCtrl.$inject = ['Teacher', '$stateParams', '$state'];
function TeachersEditCtrl(Teacher, $stateParams, $state) {
  const vm = this;
  vm.teacher = Teacher.get($stateParams);
  vm.update = teachersUpdate;
  vm.delete = teachersDelete;

  function teachersUpdate() {
    Teacher
    .update({id: vm.teacher.id}, {teacher: vm.teacher})
    .$promise
    .then(() => $state.go('teachersShow', $stateParams));
  }

  function teachersDelete() {
    Teacher
    .remove({ id: vm.teacher.id })
    .$promise
    .then(() => {
      $state.go('teachersIndex');
    });
  }
}
