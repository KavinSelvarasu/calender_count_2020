var countDate = new Date('Jan 1, 2020 00:00:00').getTime();

function newYear() {

    var now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
    
}
setInterval(() => {
    newYear();
}, 1000);

