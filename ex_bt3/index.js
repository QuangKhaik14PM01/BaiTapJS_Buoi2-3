function convertToVND() {
    const usdAmount = parseFloat(document.getElementById('usdAmount').value);

    if (!isNaN(usdAmount)) {
        const vndAmount = usdAmount * 23500;
        document.getElementById('result').innerHTML = `${usdAmount.toFixed(2)} USD = ${vndAmount.toFixed(0)} VND`;
    } else {
        document.getElementById('result').innerHTML = "Vui lòng nhập số tiền USD hợp lệ.";
    }
}