angular
.module('project4')
.controller('LessonsEditCtrl', LessonsEditCtrl);

LessonsEditCtrl.$inject = ['Lesson', '$stateParams', '$state'];
function LessonsEditCtrl(Lesson, $stateParams, $state) {
  const vm = this;
  vm.lesson = Lesson.get($stateParams);
  vm.update = lessonsUpdate;
  vm.delete = lessonsDelete;

  function lessonsUpdate() {
    Lesson
    .update(vm.lesson)
    .$promise
    .then(() => $state.go('lessonsShow', $stateParams));
  }

  function lessonsDelete() {
    Lesson
    .remove({ id: vm.lesson._id })
    .$promise
    .then(() => {
      $state.go('lessonsIndex');
    });
  }
}