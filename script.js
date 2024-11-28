let myCanvas = document.createElement('canvas');
document.querySelector('#celebrate').appendChild(myCanvas);
function celebrate() {
    for (let i = 0; i <= innerWidth / 100; i++) {
        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });
    };
}; 
let celebratecount = 0;

function nextWeekend(start) {
    let tempdate = new Date().getDay();
    let addition = 0;
    while (tempdate < start) {
        addition++;
        tempdate++;
    }
    while (tempdate > start) {
        addition--;
        tempdate--;
    }
    
    return new Date().getDate() + addition;
}

function updateTimeWeekend(countdownDate) {
    let now = new Date();
    let days = (countdownDate.getDay() == 0 ? 7 : countdownDate.getDay()) - now.getDay();
    let hours = countdownDate.getHours() - now.getHours();
        if (hours < 0 && days > 0) { hours = 24 + hours; days--;};

    let minutes = countdownDate.getMinutes() - now.getMinutes();
        if (minutes > countdownDate.getMinutes() && hours > 0) { hours--; };
        if (minutes < 0 && hours > 0) { minutes = 60 + minutes; hours--; };
        if (minutes < 0 && hours == 0 && days > 0) { minutes = 60 + minutes; hours = 23 + hours; days--; };

    let seconds = 59 - now.getSeconds();
        if (seconds != 0) minutes--;

    document.querySelector(".day .time").innerHTML = days;
    document.querySelector(".hour .time").innerHTML = hours;
    document.querySelector(".minute .time").innerHTML = minutes;
    document.querySelector(".second .time").innerHTML = seconds;
    document.querySelector(".millisecond .time").innerHTML = Math.floor((1000 - new Date().getMilliseconds()) / 10);

    document.querySelectorAll(".time-container").forEach(e => e.style.display = "flex" )
    document.querySelectorAll(".time-container:not(.millisecond)").forEach(e => e.style.display = "flex" )

    document.querySelector(".millisecond").style.display = "none";
    document.querySelector(".year").style.display = "none";
    document.querySelector(".month").style.display = "none";

    document.querySelector("h1.title").innerHTML = "Helge-Countdown";

    if (days == 0) {
        document.querySelector(".day").style.display = "none";

        document.querySelector("h1.title").innerHTML = "Nå er vi så jævlig nærme!";
        document.querySelector(".text.before").innerHTML = "Det er bare";
        document.querySelector(".text.after").innerHTML = "Til helgen nå";

        if (hours == 0) {
            document.querySelector(".hour").style.display = "none";
            document.querySelector(".time-container.millisecond").style.display = "flex";

            document.querySelector("h1.title").innerHTML = "Siste nedtelling!";
            document.querySelector(".text.before").innerHTML = "Det er bare";
            document.querySelector(".text.after").innerHTML = "Til helgen nå";

            if (minutes < 0) {
                document.querySelectorAll(".time-container").forEach(e => e.style.display = "none" );

                document.querySelector("h1.title").innerHTML = "DET ER HELG!";
                document.querySelector(".text.before").innerHTML = "Gå ut av kontoret";
                document.querySelector(".text.after").innerHTML = "Og skrik hallelujah";

                if (celebratecount < 1) {
                    celebrate();
                    celebratecount++;
                }
            }
        }
        else if (hours < 0) {
            document.querySelectorAll(".time-container").forEach(e => e.style.display = "none" );

            document.querySelector("h1.title").innerHTML = "DET ER HELG!";
            document.querySelector(".text.before").innerHTML = "Og det er fortsatt";
            document.querySelector(".text.after").innerHTML = "FREDAG!";

            if (celebratecount < 1) {
                celebrate();
                celebratecount++;
            }
        }
    }
    else if (days < 0) {
        document.querySelectorAll(".time-container").forEach(e => e.style.display = "none" );

        document.querySelector("h1.title").innerHTML = "DET ER FORTSATT HELG!";
        document.querySelector(".text.before").innerHTML = "Legg deg seint";
        document.querySelector(".text.after").innerHTML = "Våkne seinere!";

        if (celebratecount < 1) {
            celebrate();
            celebratecount++;
        }
    }
    else if (days == 1) {
        document.querySelector("h1.title").innerHTML = "Endelig snart helg nå!";
        document.querySelector(".text.before").innerHTML = "Det er enda";
    }
}

function updateTimeDate(countdownDate) {
    let now = new Date();
    let years = countdownDate.getFullYear() - now.getFullYear();
    let months = countdownDate.getMonth() - now.getMonth();
        if (months < 0 && years > 0) { months = 12 + months; years--;};

    let days = countdownDate.getDate() - now.getDate();
        if (days < 0 && months > 0) { days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() + days; months--; };
        
    let hours = countdownDate.getHours() - now.getHours();
        if (hours > countdownDate.getHours() && days > 0) { hours = 24 + hours; days--;};
        if (hours < 0 && days > 0) { hours = 24 + hours; days--;};

    let minutes = countdownDate.getMinutes() - now.getMinutes() - 1;
        if (minutes > countdownDate.getMinutes() && hours > 0) { hours--; };
        if (minutes < 0 && hours > 0) { minutes = 60 + minutes; hours--; };
        if (minutes < 0 && hours == 0 && days > 0) { minutes = 60 + minutes; hours = 23 + hours; days--; };

    let seconds = 59 - now.getSeconds();

    document.querySelector(".year .time").innerHTML = years;
    document.querySelector(".month .time").innerHTML = months;
    document.querySelector(".day .time").innerHTML = days;
    document.querySelector(".hour .time").innerHTML = hours;
    document.querySelector(".minute .time").innerHTML = minutes;
    document.querySelector(".second .time").innerHTML = seconds;
    document.querySelector(".millisecond .time").innerHTML = Math.floor((1000 - new Date().getMilliseconds()) / 10);

    document.querySelectorAll(".time-container").forEach(e => e.style.display = "flex" )
    document.querySelectorAll(".time-container:not(.millisecond)").forEach(e => e.style.display = "flex" )

    document.querySelector(".time-container.millisecond").style.display = "none";

    if (years <= 0) document.querySelector(".year").style.display = "none";

    if (months <= 0) {
        document.querySelector(".month").style.display = "none";

        document.querySelector("h1.title").innerHTML = "Bare en liten måned";
        document.querySelector(".text.before").innerHTML = "Det er bare";
        document.querySelector(".text.after").innerHTML = "Til din Dato";

        if (days == 0) {
            document.querySelector(".day").style.display = "none";

            document.querySelector("h1.title").innerHTML = "I dag er dagen!";
            document.querySelector(".text.before").innerHTML = "Det er bare";
            document.querySelector(".text.after").innerHTML = "Til din Dato";

            if (hours == 0) {
                document.querySelector(".hour").style.display = "none";
                document.querySelector(".time-container.millisecond").style.display = "flex";

                document.querySelector("h1.title").innerHTML = "Site nedtelling!";
                document.querySelector(".text.before").innerHTML = "Det er bare";
                document.querySelector(".text.after").innerHTML = "Til din Dato";

                if (minutes < 0) {
                    document.querySelectorAll(".time-container").forEach(e => e.style.display = "none" );

                    document.querySelector("h1.title").innerHTML = "ITS TIME!";
                    document.querySelector(".text.before").innerHTML = "Jeg vet ikke hva du feirer,";
                    document.querySelector(".text.after").innerHTML = "men det er på tide å begynne!";

                    if (celebratecount < 1) {
                        celebrate();
                        celebratecount++;
                    }
                }
            }
        }
        else if (countdownDate < now) {
            document.querySelectorAll(".time-container").forEach(e => e.style.display = "none" );

            document.querySelector("h1.title").innerHTML = "ITS TIME!";
            document.querySelector(".text.before").innerHTML = "Jeg vet ikke hva du feirer,";
            document.querySelector(".text.after").innerHTML = "men det er på tide å begynne!";

            if (celebratecount < 1) {
                celebrate();
                celebratecount++;
            }
        }
    }
    else {
        document.querySelector("h1.title").innerHTML = "Venten fortsetter!";
        document.querySelector(".text.before").innerHTML = "Det er bare";
        document.querySelector(".text.after").innerHTML = "Til din Dato";
    }
}

function refreshCountDown() {
    if (countdownType == "helg") {
        weekendStart = {
            day: localStorage.getItem("day") || 5,
            hour: localStorage.getItem("hour") || 15,
            minute: localStorage.getItem("minute") || 30
        }
        countdown = new Date(today.getFullYear(), today.getMonth(), nextWeekend(weekendStart.day), weekendStart.hour, weekendStart.minute);
    }
    else {
        countdownDate = {
            date: localStorage.getItem("date") || new Date().getDate(),
            month: localStorage.getItem("month") || new Date().getMonth(),
            year: localStorage.getItem("year") || new Date().getFullYear(),
        
            hour: localStorage.getItem("hour") || new Date().getHours() + 1,
            minute: localStorage.getItem("minute") || 0
        }
        countdown = new Date(countdownDate.year, countdownDate.month, countdownDate.date, countdownDate.hour, countdownDate.minute);
    }
}

let weekendStart = {
    day: localStorage.getItem("day") || 5,
    hour: localStorage.getItem("hour") || 15,
    minute: localStorage.getItem("minute") || 30
}
document.querySelector("#weekday" + weekendStart.day).classList.add("selected");

let countdownDate = {
    date: localStorage.getItem("date") || new Date().getDate(),
    month: localStorage.getItem("month") || new Date().getMonth(),
    year: localStorage.getItem("year") || new Date().getFullYear(),

    hour: localStorage.getItem("hour") || new Date().getHours() + 1,
    minute: localStorage.getItem("minute") || 0
}

document.querySelector(".wrong input[type='date'").addEventListener("change", (evt) => {
    let values = evt.target.value.split("-");
    localStorage.setItem("year", values[0]);
    localStorage.setItem("month", values[1] - 1);
    localStorage.setItem("date", values[2]);

    refreshCountDown();
})
document.querySelector(".wrong input[type='date'").value = `${ localStorage.getItem("year") }-${ 
        localStorage.getItem("month") < 9 ? "0" + (localStorage.getItem("month") - 0 + 1) : (localStorage.getItem("month") - 0 + 1)
    }-${ localStorage.getItem("date") }`;

document.querySelector("#weekday" + weekendStart.day).classList.add("selected");
document.querySelectorAll(".wrong h2 span").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".wrong h2 span").forEach((s) => s.classList.remove("selected"));
        e.classList.add("selected");
        localStorage.setItem("day", e.id.replace("weekday", ""));
        refreshCountDown();
    })
})

document.querySelectorAll(".wrong input[type='text'").forEach((e) => {
    e.addEventListener("change", () => {
        if (e.value.length > 2 || !(e.value >= 0) || (e.classList[0] == "hour" && e.value > 24) || (e.classList[0] == "minute" && e.value > 60)) {
            alert("Invalid number");
            e.value = "";
        }
        else {
            localStorage.setItem(e.classList[0], e.value);
            refreshCountDown();
        }
    });
})

let countdownType = localStorage.getItem("countdownType") || "helg";
document.querySelector(".wrong select").addEventListener("change", evt => { localStorage.setItem("countdownType", evt.target.value); location.reload() } );
document.querySelector(".wrong select").value = countdownType;
document.querySelector(".wrong").classList.add(countdownType);

let interval;
let today = new Date();
let countdown;

if (countdownType == "helg") {
    countdown = new Date(today.getFullYear(), today.getMonth(), nextWeekend(weekendStart.day), weekendStart.hour, weekendStart.minute);
    interval = setInterval(() => updateTimeWeekend(countdown), 10);
}
else {
    document.title = "Er det " + (countdownDate.month - 0 + 1) + ". " + countdownDate.date + "?"
    countdown = new Date(countdownDate.year, countdownDate.month, countdownDate.date, countdownDate.hour, countdownDate.minute);
    interval = setInterval(() => updateTimeDate(countdown), 10)
}
    