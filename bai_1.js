function convert(){
    let a = +document.getElementById("nhiet_do").value;
    document.getElementById("result").innerText = (a * 9/5 + 32).toString();
}