angular
  .module('project4')
  .controller('TeachersShowCtrl', TeachersShowCtrl);

TeachersShowCtrl.$inject = ['Teacher', '$stateParams'];
function TeachersShowCtrl(Teacher, $stateParams) {
  const vm = this;

  vm.teacher = Teacher.get({ id: $stateParams.id });
}
