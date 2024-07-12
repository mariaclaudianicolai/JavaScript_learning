// Create an accout on https://www.mapbox.com/

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2ViZGV2c2ltcGxpZmllZCIsImEiOiJja2d1c2x2djAwODE1MnltaGNzeHljcWN4In0.4u6YymF-wOIYpDoUTMcNOQ"

// To use your location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

// Coordinates of Manchester
function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // style of choosen map
    center: center, // array of longitude and latitude
    zoom: 15 // zoom where you are
  })

  // From MapBox documentation
  // Control zoom in/out using +/-
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  // to add boxes for selecting starting and ending destination
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}