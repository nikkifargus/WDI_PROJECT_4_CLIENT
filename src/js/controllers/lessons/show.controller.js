angular
.module('project4')
.controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams', 'CurrentUserService', '$scope'];
function LessonsShowCtrl(Lesson, $stateParams, CurrentUserService, $scope) {
  const vm = this;
  // getLatLng();

  vm.attending    = userAttending;
  vm.notAttending = notAttending;
  vm.lesson       = Lesson.get({ id: $stateParams.id });



  function userAttending(){
    // if current user id is already in the array of user_ids - nothing
    // if it ISNT in the user_ids array - push id in and update

    console.log(CurrentUserService.currentUser.id);
    vm.lesson.user_ids.push(CurrentUserService.currentUser.id);
    vm.lesson.users.push(CurrentUserService.currentUser.id);
    // console.log(vm.lesson.users);
    Lesson
    .update({id: $stateParams.id}, {lesson: vm.lesson})
    .$promise
    .then((data2) => {
      console.log('2',data2);
      console.log(vm.lesson.users);
    });
  }

  function notAttending() {
    vm.lesson.user_ids.splice(vm.lesson.user_ids.indexOf(CurrentUserService.currentUser.id), 1);
    vm.lesson.users.splice(vm.lesson.users.indexOf(CurrentUserService.currentUser.id), 1);
    Lesson
    .update({id: $stateParams.id}, {lesson: vm.lesson})
    .$promise
    .then(() => {

    });
  }

  // getLatLng();
  // function getLatLng(){
  //   Lesson.get({ id: $stateParams.id })
  //   .$promise
  //   .then(data => {
  //     const lat  = data.location.lat;
  //     const long = data.location.long;
  //     const latlong = lat + long;
  //   });
  // }
}
