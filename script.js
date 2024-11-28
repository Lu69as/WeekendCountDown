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

let countdownType;
let today = new Date();
let countdownDate = new Date(today.getFullYear(), today.getMonth(), nextWeekend(5), 15, 30);

if (countdownDate.getDay() - today.getDay() >= -1 && countdownDate.getDay() - today.getDay() <= 5)
    countdownType = "weekend";

function updateTimeWeekend(countdownDate) {
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

if (countdownType == "weekend")
    setInterval(() => updateTimeWeekend(countdownDate), 10)

else
    setInterval(() => updateTimeDate(countdownDate), 10)
    