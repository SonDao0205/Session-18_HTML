let num = parseInt(prompt("Nhập số (0-999): "), 10);
let result = "";

if (num == 0) {
    result = "Không";
} else {
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = num % 10;


    if (hundreds > 0) {
        if (hundreds === 1) result += "Một trăm";
        else if (hundreds === 2) result += "Hai trăm";
        else if (hundreds === 3) result += "Ba trăm";
        else if (hundreds === 4) result += "Bốn trăm";
        else if (hundreds === 5) result += "Năm trăm";
        else if (hundreds === 6) result += "Sáu trăm";
        else if (hundreds === 7) result += "Bảy trăm";
        else if (hundreds === 8) result += "Tám trăm";
        else if (hundreds === 9) result += "Chín trăm";
        if (tens == 0 && ones > 0) result += " linh";
    }

    if (tens == 1) {
        if (ones === 0) result += " mười";
        else if (ones === 1) result += " mười một";
        else if (ones === 2) result += " mười hai";
        else if (ones === 3) result += " mười ba";
        else if (ones === 4) result += " mười bốn";
        else if (ones === 5) result += " mười lăm";
        else if (ones === 6) result += " mười sáu";
        else if (ones === 7) result += " mười bảy";
        else if (ones === 8) result += " mười tám";
        else if (ones === 9) result += " mười chín";
    } else {
        if (tens === 2) result += " hai mươi";
        else if (tens === 3) result += " ba mươi";
        else if (tens === 4) result += " bốn mươi";
        else if (tens === 5) result += " năm mươi";
        else if (tens === 6) result += " sáu mươi";
        else if (tens === 7) result += " bảy mươi";
        else if (tens === 8) result += " tám mươi";
        else if (tens === 9) result += " chín mươi";

        if (ones > 0) {
            if (ones === 1) result += " một";
            else if (ones === 2) result += " hai";
            else if (ones === 3) result += " ba";
            else if (ones === 4) result += " bốn";
            else if (ones === 5) result += " năm";
            else if (ones === 6) result += " sáu";
            else if (ones === 7) result += " bảy";
            else if (ones === 8) result += " tám";
            else if (ones === 9) result += " chín";
        }
    }
}
document.write(`${result}`)