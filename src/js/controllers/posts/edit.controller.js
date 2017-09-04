angular
.module('project4')
.controller('PostsEditCtrl', PostsEditCtrl);

PostsEditCtrl.$inject = ['Post', '$stateParams', '$state'];
function PostsEditCtrl(Post, $stateParams, $state) {
  const vm = this;
  vm.post = Post.get($stateParams);
  vm.update = postsUpdate;
  vm.delete = postsDelete;

  function postsUpdate() {
    Post
    .update(vm.post)
    .$promise
    .then(() => $state.go('postsShow', $stateParams));
  }

  function postsDelete() {
    Post
    .remove({ id: vm.post._id })
    .$promise
    .then(() => {
      $state.go('postsIndex');
    });
  }
}
