function calculateSum() {
    const number = document.getElementById('twoDigitNumber').value;

    if (number >= 10 && number <= 99) {
        const firstDigit = parseInt(number.charAt(0));
        const secondDigit = parseInt(number.charAt(1));
        const sum = firstDigit + secondDigit;

        document.getElementById('result').innerHTML = `Tổng hai chữ số của ${number} là ${sum}`;
    } else {
        document.getElementById('result').innerHTML = "Vui lòng nhập một số có hai chữ số hợp lệ.";
    }
}