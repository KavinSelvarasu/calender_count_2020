var countDate = new Date('Mar 1, 2021 00:00:00').getTime();
var check = 0;
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
    console.log(d,m,h,s)
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;

    if (d,h,m,s == check){
        window.location.href = '/newyea_2020.html';
    }else
        console.log('Error');
    
}
setInterval(() => {
    newYear();
}, 1500);

