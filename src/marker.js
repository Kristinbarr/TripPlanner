const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === 'hotels') {
    markerDomEl.style.backgroundImage = iconURLs.hotels
  } else if (type === 'restuarants') {
    markerDomEl.style.backgroundImage = iconURLs.restaurants
  } else if (type === 'activities') {
    markerDomEl.style.backgroundImage = iconURLs.activities
  }
  
  new mapbox.Marker(markerDomEl).setLngLat(coords).addTo(map);
};

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

module.exports = buildMarker;