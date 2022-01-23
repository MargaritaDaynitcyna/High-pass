ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.7600984041919, 37.61864584507749],
        zoom: 13.2
    });
    var myPlacemark = new ymaps.Placemark([55.76949828043418, 37.63985675396727], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/placeMark.png',
        // iconImageHref: 'sprite.svg#placeMark',
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeEditor');  
    myMap.controls.remove('fullscreenControl');
    // myMap.controls.remove('routeButtonControl');  
    // myMap.controls.remove('routePanelControl');
    let t=document.querySelector('.ymaps-2-1-79-copyright')
    myMap.controls.remove('.ymaps-2-1-79-copyright');


}
