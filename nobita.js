function nobitalen() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function nobitaxuong() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function nobitatrai() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function nobitaphai() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            nobitatrai();
            break;
        case 39:
            nobitaphai();
            break;
        case 38:
            nobitalen();
            break;
        case 40:
            nobitaxuong();
            break;
    }
}
window.addEventListener('load', docReady);
function docReady() {
    window.addEventListener('keydown', moveSelection);
}