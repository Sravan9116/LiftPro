const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});


/*SIDEBAR ACTIVE MENU*/

const menuItems =
document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");

    });

});


/*ANIMATED COUNTERS*/

const counters =
document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const target =
    Number.parseFloat(counter.innerText);

    let count = 0;

    const speed = target / 60;

    const updateCounter = () => {

        if(count < target){

            count += speed;

            if (target % 1 === 0) {
                counter.innerText = Math.floor(count);
            } else {
                counter.innerText = count.toFixed(1);
            }

            requestAnimationFrame(
                updateCounter
            );

        }else{

            counter.innerText = target;
        }

    };

    updateCounter();

});


/* TASK TABLE HOVER EFFECT */

const rows =
document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.transform =
        "scale(1.01)";

        row.style.transition =
        ".3s";

    });

    row.addEventListener("mouseleave", () => {

        row.style.transform =
        "scale(1)";

    });

});


/* REPORT SUBMISSION */

const reportForm =
document.querySelector(
".report-section form"
);

if(reportForm){

    reportForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
        "Daily Report Submitted Successfully!"
        );

        this.reset();

    });

}


/* FILE UPLOAD PREVIEW NAME*/

const uploads =
document.querySelectorAll(
'.upload-card input[type="file"]'
);

uploads.forEach(input => {

    input.addEventListener(
    "change",
    function(){

        if(this.files.length > 0){

            alert(
            "Selected File: " +
            this.files[0].name
            );

        }

    });

});


/* NOTIFICATION CLICK*/

const notification =
document.querySelector(
".notification"
);

if(notification){

    notification.addEventListener(
    "click",
    () => {

        alert(
        "You have 8 new notifications."
        );

    });

}


/* LIVE CLOCK*/

const welcomeCard =
document.querySelector(
".welcome-card"
);

if(welcomeCard){

    const clock =
    document.createElement("div");

    clock.classList.add(
    "live-clock"
    );

    clock.style.marginTop =
    "15px";

    welcomeCard.appendChild(
    clock
    );

    setInterval(() => {

        const now =
        new Date();

        clock.innerHTML =
        now.toLocaleTimeString();

    },1000);

}


/* PROGRESS BAR ANIMATION*/

const progressBars =
document.querySelectorAll(
".progress-fill"
);

window.addEventListener(
"load",
() => {
    progressBars.forEach(bar => {
        bar.style.width = "0";
        setTimeout(() => {
            if(bar.classList.contains("repair")){
                bar.style.width = "82%";
            }
            if(bar.classList.contains("installation")){
                bar.style.width = "74%";
            }
            if(bar.classList.contains("maintenance")){
                bar.style.width = "93%";
            }
            bar.style.transition =
            "width 2s ease";
        },300);
    });
});


/* AUTO NOTIFICATION POPUP*/

setTimeout(() => {

    alert(
    "New Emergency Lift Repair Assigned!"
    );

},5000);


/* PERFORMANCE MESSAGE*/

setTimeout(() => {

    console.log(
    "Employee Performance : 91%"
    );

},2000);


console.log(
"LiftPro Employee Dashboard Loaded Successfully"
);