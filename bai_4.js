function cal(){
    let x = +document.getElementById("num1").value;
    let y = +document.getElementById("num2").value;
    let kqua = (x * y) / 2;
    document.getElementById("result").innerText = 'Diện tích hình chữ nhật là: ' + kqua + ' đvdt';
}