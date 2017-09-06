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

//
// googleMap.$inject = ['$window','Lesson', '$stateParams'];
// function googleMap($window, Lesson, $stateParams) {
//
//   getLatLng();
//   function getLatLng(){
//     Lesson.get({ id: $stateParams.id })
//     .$promise
//     .then(data => {
//       const lat  = data.location.lat;
//       const long = data.location.long;
//       // loadMap(lat, long);
//     });
//   }
//
//   // function loadMap(lat, long){
//   //
//   //   console.log(`************${lat}`);
//   //   console.log(`************${long}`);
//
//     const directive = {
//       restrict: 'E',
//       replace: true,
//       template: '<div class="google-map"></div>',
//       scope: {
//         center: '='
//       },
//       link($scope, element) {
//         console.log(element[0]);
//         const map = new $window.google.maps.Map(element[0], {
//           zoom: 14,
//           center: $scope.center
//         });
//
//         new $window.google.maps.Marker({
//           position: {lat: lat, lng: long},
//           map: map,
//           animation: $window.google.maps.Animation.DROP
//         });
//       }
//     };
//   return directive;
//   // }
// }
//
