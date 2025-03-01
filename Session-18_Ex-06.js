let year = +prompt("Nhap nam ")
document.write(`${year} ${year % 4 == 0 && year % 100 != 0 ? "la nam nhuan" : year % 400 == 0 ? "La nam nhuan" : "khong phai la nam nhuan"}`)