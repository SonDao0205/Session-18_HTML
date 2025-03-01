let a = +prompt("Nhap goc a")
let b = +prompt("Nhap goc b")
let c = +prompt("Nhap goc c")
if (a = b = c) {
    document.write(`Tam giac deu`)
}
else if (a == b || b == c || c == a) {
    document.write(`Tam giac can`)
}
else if( a**2 + b**2 == c**2){
    document.write(`Tam giac vuong`)
}
else if (a+b>c && a+c>b && b+c>a) {
    document.write(`Tam giac thuong`)
}
else{
    document.write(`3 goc khong the tao thanh tam giac!`)
}