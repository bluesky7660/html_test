document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.querySelector(".current-date");
    const daysElement = document.querySelector(".days");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function updateCalendar() {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

        currentDateElement.textContent = `${currentYear} ${months[currentMonth]} ${currentMonth + 1}월`;

        let days = "";

        // Calculate total number of days to render
        const totalDays = firstDayOfMonth + lastDateOfMonth;
        const rowCount = Math.ceil(totalDays / 7); // Calculate number of rows needed

        // Add days from previous month
        for (let i = firstDayOfMonth; i > 0; i--) {
            days += `<li class="inactive">${lastDayOfLastMonth - i + 1}</li>`;
        }

        // Add days for current month
        for (let i = 1; i <= lastDateOfMonth; i++) {
            if (i === new Date().getDate() && currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth()) {
                days += `<li class="active">${i}</li>`;
            } else {
                days += `<li>${i}</li>`;
            }
        }

        // Add days from next month to complete the last row
        const remainingDays = rowCount * 7 - totalDays;
        for (let i = 1; i <= remainingDays; i++) {
            days += `<li class="inactive">${i}</li>`;
        }

        daysElement.innerHTML = days;
    }

    prevButton.addEventListener("click", function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextButton.addEventListener("click", function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    updateCalendar();
});