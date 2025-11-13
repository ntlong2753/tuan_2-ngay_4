function cal() {
    let a = +document.getElementById("phut").value;
    let x;
    if(a > 0 && a <= 100){
        let tong_cuoc = 50000 + (a * 500);
        x = 'Tổng số cước gọi là: ' + tong_cuoc + ' đồng';
    }
    else if(a > 100 && a < 500){
        let tong_cuoc = 100000 + (a * 300);
        x = 'Tổng số cước gọi là: ' + tong_cuoc + ' đồng';
    }
    else {
        let tong_cuoc = 300000;
        x = 'Tổng số cước gọi là: ' + tong_cuoc + ' đồng';
    }
    document.getElementById("result").innerHTML = x;
}