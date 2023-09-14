function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (!isNaN(length) && !isNaN(width)) {
        const perimeter = 2 * (length + width);
        const area = length * width;

        document.getElementById('perimeter').textContent = perimeter.toFixed(2);
        document.getElementById('area').textContent = area.toFixed(2);
    } else {
        document.getElementById('perimeter').textContent = "NaN";
        document.getElementById('area').textContent = "NaN";
        alert("Vui lòng nhập chiều dài và chiều rộng hợp lệ.");
    }
}