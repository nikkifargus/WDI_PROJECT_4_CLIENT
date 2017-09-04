angular
.module('project4')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;
  vm.user = User.get($stateParams);
  vm.update = usersUpdate;
  // vm.delete = usersDelete;

  function usersUpdate() {
    User
    .update({id: vm.user.id}, {user: vm.user})
    .$promise
    .then(() => $state.go('usersShow', $stateParams));
  }

  // function usersDelete() {
  //   User
  //   .remove({ id: vm.user.id })
  //   .$promise
  //   .then(() => {
  //     $state.go('usersIndex');
  //   });
  // }
}
