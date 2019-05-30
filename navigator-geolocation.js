var pos;
var lon;

$("#locale").on('click', function (e){
    e.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errCallback);
    } else { 
        alert("您的瀏覽器不支援 顯示地理位置 API");
    }
});

//position
function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    //to do...
}

//error callback
function errCallback(err) {
    console.log(err);
}