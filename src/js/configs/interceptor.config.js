angular
.module('project4')
.config(Intercepetor);

Intercepetor.$inject = ['$httpProvider'];

function Intercepetor($httpProvider) {
  return $httpProvider.interceptors.push('AuthInterceptor');
}
