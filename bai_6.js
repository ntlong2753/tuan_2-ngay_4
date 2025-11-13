function cal(){
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    if(a === 0){
        if(b !== 0){
            document.getElementById("result").innerText = 'Phương trình vô nghiệm';
        }
        else{
            document.getElementById("result").innerText = 'Phương trình vô số nghiệm';
        }
    }
    else{
        let ketqua = - b / a;
        document.getElementById("result").innerText = 'x = ' + ketqua;
    }

}