$(document).ready(function() {
  $('#main').css({'height': window.innerHeight})
  var map = L.mapbox.map('map', 'milafrerichs.mf', {zoomControl: false});
  map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
  map.markerLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
map.markerLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});
});
