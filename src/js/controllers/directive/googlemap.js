angular
.module('project4')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window'];

function googleMap($window) {
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
          center: scope.center,
          styles: [
            {
              'featureType': 'landscape',
              'stylers': [
                {
                  'hue': '#FFA800'
                },
                {
                  'saturation': 0
                },
                {
                  'lightness': 0
                },
                {
                  'gamma': 1
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'stylers': [
                {
                  'hue': '#53FF00'
                },
                {
                  'saturation': -73
                },
                {
                  'lightness': 40
                },
                {
                  'gamma': 1
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'stylers': [
                {
                  'hue': '#FBFF00'
                },
                {
                  'saturation': 0
                },
                {
                  'lightness': 0
                },
                {
                  'gamma': 1
                }
              ]
            },
            {
              'featureType': 'road.local',
              'stylers': [
                {
                  'hue': '#00FFFD'
                },
                {
                  'saturation': 0
                },
                {
                  'lightness': 30
                },
                {
                  'gamma': 1
                }
              ]
            },
            {
              'featureType': 'water',
              'stylers': [
                {
                  'hue': '#00BFFF'
                },
                {
                  'saturation': 6
                },
                {
                  'lightness': 8
                },
                {
                  'gamma': 1
                }
              ]
            },
            {
              'featureType': 'poi',
              'stylers': [
                {
                  'hue': '#679714'
                },
                {
                  'saturation': 33.4
                },
                {
                  'lightness': -25.4
                },
                {
                  'gamma': 1
                }
              ]
            }
          ]
        });

        new $window.google.maps.Marker({
          position: scope.center,
          map: map,
          animation: $window.google.maps.Animation.DROP
        });
      }, 300);
    }
  };
  return directive;
}
