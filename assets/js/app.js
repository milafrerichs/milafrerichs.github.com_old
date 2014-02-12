$(function() {
  $('section').appear();
  $('section,#map').css({'min-height': window.innerHeight})
  $(document.body).on('appear', 'section', function(event, $all_appeared_elements) {
    console.log($all_appeared_elements);
    if($all_appeared_elements.filter('#main').length > 0) {
      $('#nav').fadeOut();
      $('.sd').show();
    }
    if($all_appeared_elements.filter('#dev').length > 0) {
      $('.contributions').show();
    }
    if($all_appeared_elements.filter('#leisure').length > 0) {
      $('.leisure').show();
    }
  });
  $(document.body).on('disappear', 'section', function(event, $all_appeared_elements) {
    if($all_appeared_elements.filter('#main').length > 0) {
      //$('#nav').fadeIn();
      $('.sd').hide();
    }
    if($all_appeared_elements.filter('#dev').length > 0) {
      $('.contributions').hide();
    }
    if($all_appeared_elements.filter('#leisure').length > 0) {
      $('.leisure').hide();
    }
  });
  if($('#map').length > 0) {
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
  }
});
