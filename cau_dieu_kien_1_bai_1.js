function check() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let x = a % b;
    let y = a / b;
    if (x === 0 ) {
        x = a + ' / ' + b + ' = ' + y + ' dư ' + x + '. Nên ' + a + ' chia hết cho ' + b;
    }
    else{
        x = a + ' / ' + b + ' = ' + y + ' dư ' + x + '. Nên ' + a + ' chia không hết cho ' + b;
    }
    document.getElementById("result").innerHTML = x;
}