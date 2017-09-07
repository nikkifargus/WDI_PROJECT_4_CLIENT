angular
.module('project4')
.controller('LessonsShowCtrl', LessonsShowCtrl);

LessonsShowCtrl.$inject = ['Lesson', '$stateParams', 'CurrentUserService'];
function LessonsShowCtrl(Lesson, $stateParams, CurrentUserService) {
  const vm = this;
  // getLatLng();

  vm.attending    = userAttending;
  vm.notAttending = notAttending;
  vm.lesson       = Lesson.get({ id: $stateParams.id });



  function userAttending(){
    console.log(vm.lesson.users);
    vm.lesson.user_ids.push(CurrentUserService.currentUser.id);
    for (var i = 0; i < vm.lesson.users.length; i++) {
      if (vm.lesson.users[i].id === CurrentUserService.currentUser.id ) {
        console.log('hit');
      }else{
        vm.lesson.users.push(CurrentUserService.currentUser);
        // console.log(CurrentUserService.currentUser);
      }
    }
    Lesson
    .update({id: $stateParams.id}, {lesson: vm.lesson})
    .$promise
    .then(() => {
    });
  }

  function notAttending() {
    vm.lesson.user_ids.splice(vm.lesson.user_ids.indexOf(CurrentUserService.currentUser.id), 1);
    //loop over vm.lesson.users and when the id for an object inside == CurrentUserService.currentUser.id
    // then splice that object to remove it from the array
    for (var i = 0; i < vm.lesson.users.length; i++) {
      if (vm.lesson.users[i].id === CurrentUserService.currentUser.id ) {
        vm.lesson.users.splice(i, 1);
      }
    }
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
