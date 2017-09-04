angular
.module('project4')
.controller('LessonsNewCtrl', LessonsNewCtrl);

LessonsNewCtrl.$inject = ['Lesson', '$state', 'CurrentUserService'];
function LessonsNewCtrl(Lesson, $state, CurrentUserService){
  const vm = this;
  vm.NewLesson = NewLesson;
  vm.user = CurrentUserService.currentUser;

  function NewLesson(){
    // vm.lesson.createdBy = vm.user;
    Lesson
    .save(vm.lesson)
    .$promise
    .then(data => {
      console.log(data);
      $state.go('lessonsIndex');
    });
  }
}
