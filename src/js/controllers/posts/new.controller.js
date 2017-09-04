angular
.module('project4')
.controller('PostsNewCtrl', PostsNewCtrl);

PostsNewCtrl.$inject = ['Post', '$state', 'CurrentUserService'];
function PostsNewCtrl(Post, $state, CurrentUserService){
  const vm = this;
  vm.NewPost = NewPost;
  vm.user = CurrentUserService.currentUser;

  function NewPost(){
    // vm.post.createdBy = vm.user;
    Post
    .save(vm.post)
    .$promise
    .then(data => {
      console.log(data);
      $state.go('postsIndex');
    });
  }
}
