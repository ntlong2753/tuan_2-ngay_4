const display = document.getElementById('display');
let khoi_dau = '0';
function appendValue(value) {
    if (khoi_dau === '0' && value !== '.' && value !== '0') {
        khoi_dau = value;
    }
    else if (khoi_dau === '0' && value === '0') {
        return 0;
    }
    else {
        khoi_dau += value;
    }
    display.value = khoi_dau;
}