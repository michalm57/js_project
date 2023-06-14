function timeCounter() {
    var today = new Date();

    var day = today.getDate();
    if (day < 10) day = "0" + day;

    var month = today.getMonth() + 1;
    if (month < 10) month = "0" + month;

    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour < 10) hour = "0" + hour;

    var minutes = today.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    var seconds = today.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById('clock').innerHTML = day + '.' + '.' + month + '.' + year + ' | ' + hour + ':' + minutes + ':' + seconds;

    setTimeout("timeCounter()", 1000);
}