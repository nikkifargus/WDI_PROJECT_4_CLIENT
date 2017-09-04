angular
.module('project4')
.controller('LessonsIndexCtrl', LessonsIndexCtrl);

LessonsIndexCtrl.$inject = ['Lesson'];
function LessonsIndexCtrl(Lesson){
  const vm = this;
  lessonIndex();

  function lessonIndex() {
    vm.lessons = Lesson.query();

  }


}
