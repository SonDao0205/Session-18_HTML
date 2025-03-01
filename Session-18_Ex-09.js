let hours = +prompt("Nhap gio (0-23)")
let minutes = +prompt("Nhap phut (0-59)")
let second = +prompt("Nhap giay (0-59)")
let time;
if (hours == 0) {
    hours = 12;
    document.write(time = (`${hours}:${minutes}:${second} AM`));
}
else if (hours >= 1 && hours <= 11) {
    document.write(time = (`${hours}:${minutes}:${second} AM`));
}
else if (hours == 12) {
    document.write(time = (`${hours}:${minutes}:${second} PM`));
}
else if (hours >= 13 && hours <= 23) {
    hours = hours - 12
    document.write(time = (`${hours}:${minutes}:${second} PM`));
}
else{
    document.write(`Thoi gian nhap vao khong hop le`)
}