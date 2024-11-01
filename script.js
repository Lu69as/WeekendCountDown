let weekend = [5, 14, 30, 0];
weekend[1]--;

function newTime() {
    let date = new Date();

    // Day
    {
        if (weekend[0] - date.getDay() < 0) {
            document.querySelector(".day .time").innerHTML = date.getDay() - weekend[0];
            document.querySelector("h1.title").innerHTML = "DET ER HELG!";
            document.querySelector(".text.before").innerHTML = "Det er bare";
            document.querySelector(".text.after").innerHTML = "Til helgen er over";
        }
        else if (weekend[0] - date.getDay() == 0) {
            document.querySelector(".day").style.display = "none";
            document.querySelector("h1.title").innerHTML = "Nå er vi så jævlig nærme!";
            document.querySelector(".text.before").innerHTML = "Det er bare";
            document.querySelector(".text.after").innerHTML = "Til helgen nå";
        }
        else if (weekend[0] - date.getDay() == 1) {
            document.querySelector(".day .time").innerHTML = weekend[0] - date.getDay();
            document.querySelector("h1.title").innerHTML = "Endelig snart helg nå!";
            document.querySelector(".text.before").innerHTML = "Det er enda";
        }
        else {
            document.querySelector(".day .time").innerHTML = weekend[0] - date.getDay();
        }
    }

    // Hour
    {
        if (weekend[1] - date.getHours() < 0 && weekend[1] - date.getDay() < 0) {
            document.querySelector(".hour .time").innerHTML = weekend[1] - date.getHours() + 24;
            document.querySelector("h1.title").innerHTML = "DET ER HELG!";
            document.querySelector(".text.before").innerHTML = "Det er bare";
            document.querySelector(".text.after").innerHTML = "Til helgen er over";
        }
        else if (weekend[1] - date.getHours() == 0) {
            document.querySelector(".hour").style.display = "none";
            document.querySelector(".milliseconds").style.display = "flex";
            document.querySelector("h1.title").innerHTML = "Siste nedtelling!";
            document.querySelector(".text.before").innerHTML = "Det er bare";
            document.querySelector(".text.after").innerHTML = "Til helgen nå";

            document.querySelector(".milliseconds .time").innerHTML = 100 - Math.floor(date.getMilliseconds() / 10);
        }
        else {
            document.querySelector(".hour .time").innerHTML = weekend[1] - date.getHours();
        }
    }

    document.querySelector(".minute .time").innerHTML = weekend[2] - date.getMinutes() < 0 
        ? weekend[2] - date.getMinutes() + 60 : weekend[2] - date.getMinutes();
        
    document.querySelector(".second .time").innerHTML =  weekend[3] - date.getSeconds() < 0 
        ? weekend[3] - date.getSeconds() + 60 : weekend[3] - date.getSeconds();
} newTime();

setInterval(() => {
    newTime();
}, 1);