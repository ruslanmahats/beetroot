import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%'
};

const center = {
	lat: 50.4404284,
	lng: 30.5247731
};

const markerPosition = {
	lat: 50.4414484,
	lng: 30.5297831
};

const MAP_API_KEY = 'AIzaSyAKUBUUPQqMh8oSzNk-rsKUFqpX9vDczvM';

const customSyles = [
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e9e9e9"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 18
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dedede"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#ffffff"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#333333"
			},
			{
				"lightness": 40
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f2f2f2"
			},
			{
				"lightness": 19
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#fefefe"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#fefefe"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
		]
	}
];

export const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: MAP_API_KEY
	})

	// const [map, setMap] = React.useState(null)

	// const onLoad = React.useCallback(function callback(map) {
	// 	// This is just an example of getting and using the map instance!!! don't just blindly copy!
	// 	const bounds = new window.google.maps.LatLngBounds(center);
	// 	map.fitBounds(bounds);

	// 	setMap(map)
	// }, [])

	// const onUnmount = React.useCallback(function callback(map) {
	// 	setMap(null)
	// }, [])

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={16}
			options={{
				styles: customSyles
			}}
		>
			<Marker
				position={markerPosition}
				icon={{
					path: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
					fillColor: '#f28123',
					strokeColor: "#f28123",
					fillOpacity: 1,
					scale: 0.08,
					labelOrigin: new window.google.maps.Point(200, -250)
				}}
			/>
		</GoogleMap>
	) : <></>
}