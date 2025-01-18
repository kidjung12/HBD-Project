
const birthdayDate = new Date(new Date().getFullYear(), 0, 15, 0, 0, 0); 

function updateCountdown() {
    const now = new Date();
    let timeLeft = birthdayDate - now;

    if (timeLeft < 0) {
        birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
        timeLeft = birthdayDate - now;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = 
        `เหลือเวลาอีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
