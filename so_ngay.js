function check() {
    let x = +document.getElementById("month").value;
    let y = +document.getElementById("year").value;
    let ket_qua;
    if (y >= 0){
        switch (x) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                ket_qua = 'Năm ' + y + ' tháng ' + x + ' có 31 ngày'
                break;
            case 4: case 6: case 9: case 11:
                ket_qua = 'Năm ' + y + ' tháng ' + x + ' có 30 ngày'
                break;
            case 2:

                if(y % 4 === 0 && y % 100 !== 0 || y % 400 === 0){
                    ket_qua = 'Năm ' + y + ' tháng ' + x + ' có 29 ngày'
                }
                    else{
                        ket_qua = 'Năm ' + y + ' tháng ' + x + ' có 28 ngày'
                    }
                    break;
            default:
                ket_qua = 'Tháng không hợp lệ'
        }
    }
    else{
        ket_qua = 'Năm không hợp lệ'
    }
    document.getElementById("result").innerHTML = ket_qua;
}