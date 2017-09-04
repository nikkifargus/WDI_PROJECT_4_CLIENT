angular
  .module('project4')
  .controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject = ['Post', '$stateParams'];
function PostsShowCtrl(Post, $stateParams) {
  const vm = this;

  vm.post = Post.get({ id: $stateParams.id });
}
