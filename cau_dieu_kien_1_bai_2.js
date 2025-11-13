function check(){
    let a = document.getElementById("age").value;
    let x;
    if(a >= 0) {
        if(a < 15){
            x = 'Chưa đủ tuổi'
        }
        else if(a > 15){
            x = 'Đã quá tuổi nhưng vẫn chấp nhận được'
        }
        else{
            x = 'Đã đủ tuổi'
        }
        document.getElementById("result").innerHTML = x;
    }
    else{
        document.getElementById("result").innerHTML = 'Không hợp lệ';
    }
}