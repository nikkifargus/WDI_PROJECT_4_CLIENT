angular
  .module('project4')
  .factory('Teacher', teacherFactory);

teacherFactory.$inject = ['API', '$resource'];
function teacherFactory(API, $resource){
  return $resource(`${API}/teachers/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });

}
