function init() {
  let map = new ymaps.Map('map', {
    center: [52.07996756477022,23.65463858036848],
    zoom: 16
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
}

ymaps.ready(init);