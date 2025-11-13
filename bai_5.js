function cal(){
    let a = +document.getElementById("num").value;
    let kqua = Math.pow(a, 2);
    document.getElementById("result").innerText = 'Diện tích hình vuông là: ' + kqua + ' đvdt';
}