angular
.module('project4')
.controller('LessonsEditCtrl', LessonsEditCtrl);

LessonsEditCtrl.$inject = ['Lesson', 'Genre', 'Teacher', 'Location','$stateParams', '$state'];
function LessonsEditCtrl(Lesson, Genre, Teacher, Location, $stateParams, $state) {
  const vm = this;
  vm.lesson = Lesson.get($stateParams);
  vm.teachers     = Teacher.query();
  vm.genres      = Genre.query();
  vm.locations    = Location.query();
  vm.update = lessonsUpdate;
  vm.delete = lessonsDelete;

  function lessonsUpdate() {
    Lesson
    .update({id: vm.lesson.id}, {lesson: vm.lesson})
    .$promise
    .then(() => $state.go('lessonsShow', $stateParams));
  }

  function lessonsDelete() {
    Lesson
    .remove({ id: vm.lesson.id })
    .$promise
    .then(() => {
      $state.go('lessonsIndex');
    });
  }
}
