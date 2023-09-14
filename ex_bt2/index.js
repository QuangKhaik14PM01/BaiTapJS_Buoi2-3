function calculateAverage() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    const number4 = parseFloat(document.getElementById('number4').value);
    const number5 = parseFloat(document.getElementById('number5').value);

    if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3) && !isNaN(number4) && !isNaN(number5)) {
        const average = (number1 + number2 + number3 + number4 + number5) / 5;
        document.getElementById('result').innerHTML = `Trung bình 5 số thực là: ${average.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = "Vui lòng nhập 5 số thực hợp lệ.";
    }
}