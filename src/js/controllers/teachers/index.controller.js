angular
.module('project4')
.controller('TeachersIndexCtrl', TeachersIndexCtrl);

TeachersIndexCtrl.$inject = ['Teacher'];
function TeachersIndexCtrl(Teacher){
  const vm = this;
  teacherIndex();

  function teacherIndex() {
    vm.teachers = Teacher.query();

  }


}
