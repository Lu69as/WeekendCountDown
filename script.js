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
    let days = countdownDate.getDay() - now.getDay();
    let hours = countdownDate.getHours() - now.getHours();
        if (hours < 0 && days > 0) { hours = 24 + hours; days--;};
    let minutes = countdownDate.getMinutes() - now.getMinutes();
        if (minutes > countdownDate.getMinutes() && hours > 0) { hours--; };
        if (minutes < 0 && hours > 0) { minutes = 60 + minutes; hours--; };
        if (minutes < 0 && hours == 0 && days > 0) { minutes = 60 + minutes; hours = 23 + hours; days--; };
    let seconds = 59 - now.getSeconds();

    document.querySelector(".day .time").innerHTML = days;
    document.querySelector(".hour .time").innerHTML = hours;
    document.querySelector(".minute .time").innerHTML = minutes;
    document.querySelector(".second .time").innerHTML = seconds;
    document.querySelector(".millisecond .time").innerHTML = Math.floor((1000 - new Date().getMilliseconds()) / 10);

    document.querySelectorAll(".time-container").forEach(e => e.style.display = "flex" )
    document.querySelectorAll(".time-container:not(.millisecond)").forEach(e => e.style.display = "flex" )

    document.querySelector(".time-container.millisecond").style.display = "none";
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
    let days = countdownDate.getDay() - now.getDay();
    let hours = countdownDate.getHours() - now.getHours();
        if (hours > countdownDate.getHours() && days > 0) { hours = 24 + hours; days--;};
    let minutes = countdownDate.getMinutes() - now.getMinutes();
        if (minutes > countdownDate.getMinutes() && hours > 0) { hours--; };
        if (minutes < 0 && hours > 0) { minutes = 60 + minutes; hours--; };
        if (minutes < 0 && hours == 0 && days > 0) { minutes = 60 + minutes; hours = 23 + hours; days--; };
    let seconds = 59 - now.getSeconds();

    document.querySelector(".day .time").innerHTML = days;
    document.querySelector(".hour .time").innerHTML = hours;
    document.querySelector(".minute .time").innerHTML = minutes;
    document.querySelector(".second .time").innerHTML = seconds;
    document.querySelector(".millisecond .time").innerHTML = Math.floor((1000 - new Date().getMilliseconds()) / 10);

    document.querySelectorAll(".time-container").forEach(e => e.style.display = "flex" )
    document.querySelectorAll(".time-container:not(.millisecond)").forEach(e => e.style.display = "flex" )

    document.querySelector(".time-container.millisecond").style.display = "none";

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

function refreshWeekendStart() {
    weekendStart = {
        day: localStorage.getItem("day") || 5,
        hour: localStorage.getItem("hour") || 15,
        minute: localStorage.getItem("minute") || 30
    }
    countdownDate = new Date(today.getFullYear(), today.getMonth(), nextWeekend(weekendStart.day), weekendStart.hour, weekendStart.minute);
}

let weekendStart = {
    day: localStorage.getItem("day") || 5,
    hour: localStorage.getItem("hour") || 15,
    minute: localStorage.getItem("minute") || 30
}
document.querySelector("#weekday" + weekendStart.day).classList.add("selected");

document.querySelectorAll(".wrong h2 span").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".wrong h2 span").forEach((s) => s.classList.remove("selected"));
        e.classList.add("selected");
        localStorage.setItem("day", e.id.replace("weekday", ""));
        refreshWeekendStart();
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
            refreshWeekendStart();
        }
    });
})

let countdownType;
let today = new Date();
let countdownDate = new Date(today.getFullYear(), today.getMonth(), nextWeekend(weekendStart.day), weekendStart.hour, weekendStart.minute);

if (countdownDate.getDay() - today.getDay() >= -1 && countdownDate.getDay() - today.getDay() <= 5)
    countdownType = "weekend";

if (countdownType == "weekend")
    setInterval(() => updateTimeWeekend(countdownDate), 10)

else
    setInterval(() => updateTimeDate(countdownDate), 10)
    