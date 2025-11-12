let imgobj = null;
imgobj = document.getElementById('img_qua_bong');
function init(){
    imgobj = document.getElementById('img_qua_bong');
    imgobj.style.position = 'relative';
    imgobj.style.left = '0px';
}
function moveRight(){
    imgobj.style.left = parseFloat(imgobj.style.left) + 10 + 'px';
}
function moveLeft(){
    imgobj.style.left = parseFloat(imgobj.style.left) - 10 + 'px';
}
window.onload = init;