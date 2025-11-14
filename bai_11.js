function cal(){
    let x = document.getElementById("num").value;
    if(x > 0){
        let ketqua = x * 10 / 100;
        document.getElementById("result").innerText = 'Thuế cá nhân của bạn là: ' + ketqua;
    }
    else{
        document.getElementById("result").innerText = "Không có thu nhập, không cần nộp thuế. Nghèo!!!";
    }

}