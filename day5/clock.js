const clockCantainer = document.querySelector(".js-clock"),
    clockTitle = clockCantainer.querySelector("h2");

// You're gonna need this
function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const date = new Date();
    const ddays = xmasDay - date;

    const days = Math.floor(ddays / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ddays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ddays % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ddays % (1000 * 60)) / 1000);

    clockTitle.innerText = `${days < 10 ? `0${days}` : `${days}`}d ${hours < 10 ? `0${hours}` : `${hours}`
        }h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds
        }s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
