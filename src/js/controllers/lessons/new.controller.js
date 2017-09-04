angular
.module('project4')
.controller('LessonsNewCtrl', LessonsNewCtrl);

LessonsNewCtrl.$inject = ['Lesson', 'Genre', 'Teacher', '$state', 'CurrentUserService'];
function LessonsNewCtrl(Lesson, Genre, Teacher, $state, CurrentUserService){
  const vm = this;

  vm.NewLesson   = NewLesson;
  vm.user        = CurrentUserService.currentUser;
  // vm.selectGenre = selectGenre;
  // vm.genres      = Genre.query();
  // vm.lesson      = { genre_ids: []};

  function NewLesson(){
    Lesson
      .save({ lesson: vm.lesson})
      .$promise
      .then(() =>
      $state.go('lessonsIndex'));
  }

  // function selectGenre(id) {
  //   if (vm.lesson.genre_ids.indeOf(id) !== -1){
  //     const index = vm.lesson.genre_ids.indexOf(id);
  //     vm.lesson.genre_ids.splice(index, 1);
  //   } else{
  //     vm.lesson.genre_ids.push(id);
  //   }
  // }
}
