function onDeviceReady() {
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function onSuccess(position) {
document.getElementById('latitude').innerHTML = position.coords.latitude;
document.getElementById('longitude').innerHTML = 
position.coords.longitude;
document.getElementById('altitude').innerHTML = position.coords.altitude;
document.getElementById('timestamp').innerHTML = new 
Date(position.timestamp);
}
function onError(error) {
alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}
function init() {
document.addEventListener("deviceready", onDeviceReady, false);
}