let year = +prompt("Nhap so nam kinh nghiem")
if(year < 1){
    document.write(`Moi vao nghe`)
}
else if(year < 3){
    document.write(`Nhan vien co kinh nghiem`)
}
else if (year < 6) {
    document.write(`Chuyen vien`)
}
else{
    document.write(`Quan ly`)
}