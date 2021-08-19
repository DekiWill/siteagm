"use strict";


function gMapHome () {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');


			var styles =	[
					    {
					        "featureType": "administrative.locality",
					        "elementType": "all",
					        "stylers": [
					            {
					                "hue": "#2c2e33"
					            },
					            {
					                "saturation": 7
					            },
					            {
					                "lightness": 19
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "landscape",
					        "elementType": "all",
					        "stylers": [
					            {
					                "hue": "#ffffff"
					            },
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 100
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "all",
					        "stylers": [
					            {
					                "hue": "#ffffff"
					            },
					            {
					                "saturation": -100
					            },
					            {
					                "lightness": 100
					            },
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "hue": "#bbc0c4"
					            },
					            {
					                "saturation": -93
					            },
					            {
					                "lightness": 31
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "labels",
					        "stylers": [
					            {
					                "hue": "#bbc0c4"
					            },
					            {
					                "saturation": -93
					            },
					            {
					                "lightness": 31
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "road.arterial",
					        "elementType": "labels",
					        "stylers": [
					            {
					                "hue": "#bbc0c4"
					            },
					            {
					                "saturation": -93
					            },
					            {
					                "lightness": -2
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "road.local",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "hue": "#e9ebed"
					            },
					            {
					                "saturation": -90
					            },
					            {
					                "lightness": -8
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "featureType": "transit",
					        "elementType": "all",
					        "stylers": [
					            {
					                "hue": "#e9ebed"
					            },
					            {
					                "saturation": 10
					            },
					            {
					                "lightness": 69
					            },
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "all",
					        "stylers": [
					            {
					                "hue": "#e9ebed"
					            },
					            {
					                "saturation": -78
					            },
					            {
					                "lightness": 67
					            },
					            {
					                "visibility": "simplified"
					            }
					        ]
					    }
					]


			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 12;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				
				map.addMarker({
			    	icon: 'images/map/map-icon.png',
			    	lat: 40.712784,
			      	lng: -74.005941,
			      	title: 'Right Firm House',
			      	infoWindow: {
						content: '<h5>Contact</h5> <p>+8801954924794</p>'
					}
				});
				
				
			}
		});  
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMapHome();
	})(jQuery);
});