function calculateSalary() {
            const daysWorked = parseFloat(document.getElementById('daysWorked').value);
            const dailyRate = parseFloat(document.getElementById('dailyRate').value);

            if (!isNaN(daysWorked) && !isNaN(dailyRate)) {
                const salary = daysWorked * dailyRate;
                document.getElementById('result').innerHTML = `Tiền lương của nhân viên là: ${salary.toLocaleString()} VNĐ`;
            } else {
                document.getElementById('result').innerHTML = "Vui lòng nhập số ngày làm và lương mỗi ngày hợp lệ.";
            }
        }