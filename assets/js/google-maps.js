function initMap() {
    // Latitude and Longitude for Tashkent, Uzbekistan
    var myLatLng = {lat: 41.2995, lng: 69.2401};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 12, // Zoom level can be adjusted as needed
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Toshkent, O\'zbekiston' // Title Location
    });
}