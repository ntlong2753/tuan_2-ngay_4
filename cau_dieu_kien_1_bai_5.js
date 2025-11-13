function check(){
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    let c = +document.getElementById("num3").value;
    let x = (a + b*2 + c*3) / 6;
    let result;
    if (a < 0 || a > 10 || b < 0 || b > 10 || c < 0 || c > 10) {
        result = "Điểm không hợp lệ";
    } else if (x <= 10.0 && x > 9.5) {
        result = "Xếp loại xuất sắc";
    } else if (x <= 9.5 && x >= 8.0) {
        result = "Xếp loại giỏi";
    } else if (x < 8.0 && x >= 6.5) {
        result = "Xếp loại khá";
    } else if (x >= 5.0 && x < 6.5) {
        result = "Xếp loại trung bình";
    } else {
        result = "Xếp loại yếu";
    }
    document.getElementById("result").innerText = result;
}