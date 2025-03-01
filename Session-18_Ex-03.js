let name = prompt("Nhap ten cua ban");
let password = "TheMaster";
if(name == "ADMIN"){
    alert("Welcome");
    let pass = prompt("Nhap mat khau");
    if(pass == "TheMaster"){
        alert("Welcome");
    }
    else if(pass == null){
        alert("Cancelled")
    }
}
else if(name == null){
    alert("Cancelled")
}
else{
    alert("i don't know you")
}