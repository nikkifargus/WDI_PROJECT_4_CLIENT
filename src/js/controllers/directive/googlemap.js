angular
.module('project4')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window', 'Lesson', '$stateParams'];

function googleMap($window, Lesson, $stateParams) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      setTimeout(function() {
        const map = new $window.google.maps.Map(element[0], {
          zoom: 14,
          center: scope.center
        });

        new $window.google.maps.Marker({
          position: scope.center,
          map: map,
          animation: $window.google.maps.Animation.DROP
        });
      }, 200);
    }
  };
  return directive;
}
