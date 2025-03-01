let math = +prompt("Nhap diem mon toan")
let philology = +prompt("Nhap diem mon van")
let english = +prompt("Nhap diem mon anh")
let avg = (math + philology + english)/3
if(avg < 5){
    document.write(`Hoc luc yeu`)
}
else if(avg <= 6.4){
    document.write(`Hoc luc trung binh`)
}
else if(avg <= 7.9){
    document.write(`Hoc luc kha`)
}
else if(avg <= 10 ){
    document.write(`Hoc luc gioi`)
}
else{
    document.write(`Diem so khong phu hop`)
}
