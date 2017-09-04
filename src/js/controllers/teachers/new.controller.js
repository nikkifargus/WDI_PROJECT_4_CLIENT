angular
.module('project4')
.controller('TeachersNewCtrl', TeachersNewCtrl);

TeachersNewCtrl.$inject = ['Teacher', '$state', 'CurrentUserService'];
function TeachersNewCtrl(Teacher, $state, CurrentUserService){
  const vm = this;
  vm.NewTeacher = NewTeacher;
  vm.user = CurrentUserService.currentUser;

  function NewTeacher(){
    // vm.teacher.createdBy = vm.user;
    Teacher
    .save(vm.teacher)
    .$promise
    .then(data => {
      console.log(data);
      $state.go('teachersIndex');
    });
  }
}
