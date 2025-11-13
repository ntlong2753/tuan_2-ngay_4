function cal(){
    let a = +document.getElementById("doanh_so").value;
    let x;
    if(a <= 50000000){
        x = 'Số hoa hồng nhận được là: ' + a * 0.05;
    }
    else if( a > 50000000 && a <= 100000000){
        x = 'Số hoa hồng nhận được là: ' + a * 0.1;
    }
    else if(a >100000000 && a <= 500000000){
        x = 'Số hoa hồng nhận được là: ' + a * 0.15;
    }
    else{
        x = 'Số hoa hồng nhận được là: ' + a * 0.2;
    }
    document.getElementById("result").innerText = x;
}