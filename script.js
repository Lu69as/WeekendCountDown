let weekend = [5, 15, 30, 0];
if (localStorage.getItem("hour") != null)
    weekend[1] = localStorage.getItem("hour");

if (localStorage.getItem("minute") != null)
    weekend[2] = localStorage.getItem("minute");

weekend[2]--;
let tempHour = weekend[1];


document.querySelector("input.hour").addEventListener("change", () => { 
    localStorage.setItem("hour", document.querySelector("input.hour").value); 
    location.reload();
})
document.querySelector("input.minute").addEventListener("change", () => { 
    localStorage.setItem("minute", document.querySelector("input.minute").value); 
    location.reload();
})

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
        if (weekend[1] - date.getHours() < 0 && weekend[0] - date.getDay() == 0) {
            document.querySelectorAll(".time-container").forEach((e) => e.style.display = "none")
            document.querySelector("h1.title").innerHTML = "DET ER HELG!";
            document.querySelector(".text.before").innerHTML = "Enda bedre,";
            document.querySelector(".text.after").innerHTML = "DET ER FREDAG!";
        }
        else if (weekend[1] - date.getHours() < 0) {
            document.querySelector(".hour .time").innerHTML = weekend[1] - date.getHours() + 24;
        }
        else if ((weekend[1] - date.getHours() == 0 || (weekend[1] - date.getHours() == 1 && weekend[2] < date.getMinutes())) && weekend[0] - date.getDay() == 0) {
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
}

setInterval(newTime, 1);