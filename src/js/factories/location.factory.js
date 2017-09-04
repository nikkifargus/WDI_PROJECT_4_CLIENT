angular
  .module('project4')
  .factory('Location', locationFactory);

locationFactory.$inject = ['API', '$resource'];
function locationFactory(API, $resource){
  return $resource(`${API}/locations/:id`, { id: '@_id'});
}
