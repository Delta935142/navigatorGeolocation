var pos;
var lon;

$("#locale").on('click', function (e){
    e.preventDefault();
    if (navigator.geolocation) {
        var getPosition = function (opt) {
            return new Promise(function (res, rej) {
                navigator.geolocation.getCurrentPosition(res, rej, opt);
            });
        }
    
        getPosition().then((position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat, lon);
            //to do...
        }).catch((err) => {
            console.error(err.message);
        });
    
    } else { 
        alert("您的瀏覽器不支援 顯示地理位置 API");
    }
});