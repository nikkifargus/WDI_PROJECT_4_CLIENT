angular
.module('project4')
.controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post){
  const vm = this;
  postIndex();

  function postIndex() {
    vm.posts = Post.query();

  }


}
