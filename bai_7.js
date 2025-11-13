function cal() {
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    let c = +document.getElementById("num3").value;

    if (a === 0) {
        if (b === 0) {
            if (c !== 0) {
                document.getElementById("result").innerText = 'Phương trình vô nghiệm';
            } else {
                document.getElementById("result").innerText = 'Phương trình vô số nghiệm';
            }
        } else {
            let ketqua = -c / b;
            document.getElementById("result").innerText = 'x = ' + ketqua;
        }
    }
    else{
        let delta = b*b - 4*a*c;
        if (delta > 0){
            let x1 = (-b + Math.sqrt(delta)) / 2*a;
            let x2 = (-b - Math.sqrt(delta)) / 2*a;
            document.getElementById("result").innerText = 'x1 = ' + x1 + ', x2 = ' + x2;
        }
        else if(delta === 0){
            let x = -b / (2*a);
            document.getElementById("result").innerText = 'x1 = x2 = ' + x;
        }
        else{
            document.getElementById("result").innerText = 'Phương trình vô nghiệm'
        }
    }
}