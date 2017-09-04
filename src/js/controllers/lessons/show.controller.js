angular
  .module('project4')
  .controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams'];
function LessonsShowCtrl(Lesson, $stateParams) {
  const vm = this;

  vm.lesson = Lesson.get({ id: $stateParams.id });
}
