angular
.module('project4')
.factory('Lesson', Lesson);

Lesson.$inject = ['API', '$resource'];
function Lesson(API, $resource){
  return $resource(`${API}/lessons/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' },
    'attending': { method: 'PUT'}
    // 'removeattending': { method: 'GET', url: `${API}/lessons/:id/removeattending` }
  });
}
