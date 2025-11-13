function check(){
    let num = document.getElementById("number").value;
    let x;
    if(num < 0){
        x = num + ' là số nhỏ hơn 0'
    }
    else if(num > 0){
        x = num + ' là số lớn hơn 0'
    }
    else{
        x = num + ' = 0'
    }
    document.getElementById("result").innerText = x;
}