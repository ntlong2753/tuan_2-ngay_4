function check(){
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    let c = +document.getElementById("num3").value;
    if(a <= 0 || b <= 0 || c <= 0){
        document.getElementById("result").innerText = 'Tam giác không hợp lệ';
    }
    else if(a + b > c && b + c > a && a + c > b){
        document.getElementById("result").innerText = 'Tam giác hợp lệ';
    }
    else{
        document.getElementById("result").innerText = 'Tam giác không hợp lệ';
    }
}