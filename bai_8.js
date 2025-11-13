function ktra(){
    let x = +document.getElementById("age").value;
    if(x > 0 && x <= 120){
        document.getElementById("result").innerText = x + ' là tuổi của con người';
    }
    else{
        document.getElementById("result").innerText = x + ' không phải là tuổi của con người. Đây không phải con người'
    }
}