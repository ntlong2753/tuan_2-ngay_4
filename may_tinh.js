let hien_thi = document.getElementById("ket_qua");

function input(value) {
    if ( hien_thi.value === '0' ){
        //hien_thi.value = '0';
        hien_thi.value = value
    }
    else{
        hien_thi.value += value;
    }
}
function result(){
    //let result = eval(hien_thi.value)
    hien_thi.value = eval(hien_thi.value);
}
function xoa(){
    hien_thi.value = "0";
}
