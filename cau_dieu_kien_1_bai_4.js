function check(){
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    let c = +document.getElementById("num3").value;
    let x;
    if((a > b && a > c)){
        x = a;
    }
    else{
        if(b > c){
            x = b;
        }
        else{
            x = c;
        }
    }
    document.getElementById("result").innerText = x;
}