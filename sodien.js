function money() {
    let totalElectricNumber = document.getElementById('amount').value;
    let result;
    let level = 0;
    let totalMoney;

    if (totalElectricNumber > 0 && totalElectricNumber <= 50) {
        totalMoney =  totalElectricNumber * 1600;
        level = 1;
    } else if (totalElectricNumber > 50 && totalElectricNumber <= 100) {
        totalMoney = 80000 + 1700 * (totalElectricNumber - 50);
        level = 2;
    } else if (totalElectricNumber > 100 && totalElectricNumber <= 200) {
        totalMoney = 165000 + 2000 * (totalElectricNumber - 100);
        level = 3;
    } else if (totalElectricNumber > 200 && totalElectricNumber <= 300) {
        totalMoney = 365000 + 2500 * (totalElectricNumber - 200);
        level = 4;
    } else if (totalElectricNumber > 300 && totalElectricNumber <= 400) {
        totalMoney = 615000 + 2800 * (totalElectricNumber - 300);
        level = 5
    } else if (totalElectricNumber > 400) {
        totalMoney = 895000 + 2900 * (totalElectricNumber - 400);
        level = 6;
    } else {
        result = 'Xin hãy nhập đúng số tiền';
    }
    document.getElementById('result').innerHTML = 'Bạn đang ở bậc ' + level + ' số tiền phải đóng là ' + totalMoney.toLocaleString('de')
}
