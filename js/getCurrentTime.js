function getTime() {
    var get = new Date();
    currentTimeHourMinSec = get.getHours() + ':' + get.getMinutes() + ":" + get.getSeconds();
    document.getElementById('currentTimeHourMinSec').innerHTML = currentTimeHourMinSec;
    setTimeout(getTime, 100);
}
getTime();