/*=========================================================
        LAVISH ENTERPRISE CUSTOMER PORTAL
                user.js
                PART - 1
=========================================================*/

"use strict";

/*=========================================================
                    GLOBAL VARIABLES
=========================================================*/

const body = document.body;

const sidebar = document.querySelector(".sidebar");

const menuItems = document.querySelectorAll(".menu li");

const searchInput = document.querySelector(".search-box input");

const cards = document.querySelectorAll(
".stat-card,.lift-card,.profile-card,.notification-card,.glass-card"
);

const cursor = document.querySelector(".cursor");

const themeButton = document.querySelector(".theme-toggle");

const sidebarButton = document.querySelector(".sidebar-toggle");

/*=========================================================
                    PAGE LOADER
=========================================================*/

window.addEventListener("load", () => {

    body.classList.add("loaded");

});

/*=========================================================
                ACTIVE SIDEBAR MENU
=========================================================*/

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

/*=========================================================
                    SIDEBAR TOGGLE
=========================================================*/

if(sidebarButton){

    sidebarButton.addEventListener("click",()=>{

        sidebar.classList.toggle("collapsed");

    });

}

/*=========================================================
                    SEARCH FILTER
=========================================================*/

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

/*=========================================================
                    DARK MODE
=========================================================*/

const currentTheme=localStorage.getItem("lavish-theme");

if(currentTheme==="dark"){

body.classList.add("dark");

}

if(themeButton){

themeButton.addEventListener("click",()=>{

body.classList.toggle("dark");

const theme=

body.classList.contains("dark")

?

"dark"

:

"light";

localStorage.setItem(

"lavish-theme",

theme

);

});

}

/*=========================================================
                    CUSTOM CURSOR
=========================================================*/

if(cursor){

document.addEventListener(

"mousemove",

e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

);

}

/*=========================================================
                RIPPLE BUTTON EFFECT
=========================================================*/

const buttons=

document.querySelectorAll(

".primary-btn,.secondary-btn,.btn-gradient"

);

buttons.forEach(button=>{

button.addEventListener(

"click",

function(e){

const circle=document.createElement("span");

const diameter=Math.max(

button.clientWidth,

button.clientHeight

);

const radius=diameter/2;

circle.style.width=

circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.clientX-

button.offsetLeft-

radius}px`;

circle.style.top=

`${e.clientY-

button.offsetTop-

radius}px`;

circle.classList.add("ripple");

const ripple=

button.getElementsByClassName(

"ripple"

)[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

}

);

});

/*=========================================================
                SCROLL ANIMATION
=========================================================*/

const observer=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(

"fade-up"

);

}

});

},

{

threshold:.15

}

);

cards.forEach(card=>{

observer.observe(card);

});

/*=========================================================
                SMOOTH SCROLL
=========================================================*/

document.querySelectorAll(

'a[href^="#"]'

)

.forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================================
                CURRENT DATE
=========================================================*/

const dateContainer=

document.querySelector(".current-date");

if(dateContainer){

const today=new Date();

dateContainer.innerHTML=

today.toDateString();

}

/*=========================================================
                WINDOW SCROLL
=========================================================*/

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>120){

body.classList.add(

"scrolled"

);

}

else{

body.classList.remove(

"scrolled"

);

}

});

function copyText(text){

navigator.clipboard.writeText(text)

.then(()=>{

showToast(

"Copied Successfully",

"success"

);

});

}

/*=========================================================
                TOAST
=========================================================*/

function showToast(message,type="success"){

const toast=

document.createElement("div");

toast.className=

`toast ${type}`;

toast.innerHTML=

message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.remove();

},3000);

}

function generateID(prefix){

return prefix+

Math.floor(

100000+

Math.random()*900000

);

}

function formatDate(){

const date=new Date();

return date.toLocaleDateString(

"en-IN"

);

}


console.log(

"%cLAVISH Customer Portal Loaded",

"color:#2563EB;font-size:18px;font-weight:bold;"

);


/*=========================================================
        LAVISH ENTERPRISE CUSTOMER PORTAL
                user.js
                PART - 2
=========================================================*/


/*=========================================================
                COUNTER ANIMATION
=========================================================*/

const counters = document.querySelectorAll(".stat-card h2");

function animateCounter(counter){

    const target = parseInt(counter.innerText.replace(/\D/g,""));

    if(isNaN(target)) return;

    let current = 0;

    const speed = Math.max(1, Math.ceil(target / 80));

    const update = () =>{

        current += speed;

        if(current >= target){

            counter.innerText = target;

            return;

        }

        counter.innerText = current;

        requestAnimationFrame(update);

    }

    update();

}

counters.forEach(counter=>{

    animateCounter(counter);

});


/*=========================================================
                CARD FADE ANIMATION
=========================================================*/

const dashboardCards = document.querySelectorAll(

".stat-card,.lift-card,.invoice-card,.payment-box,.notification-card"

);

dashboardCards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition=".6s ease";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },index*120);

});


/*=========================================================
                WELCOME CARD
=========================================================*/

const welcomeCard=document.querySelector(".welcome-card");

if(welcomeCard){

    welcomeCard.style.opacity="0";

    welcomeCard.style.transform="translateY(30px)";

    setTimeout(()=>{

        welcomeCard.style.transition=".8s ease";

        welcomeCard.style.opacity="1";

        welcomeCard.style.transform="translateY(0)";

    },300);

}


/*=========================================================
                PROGRESS BAR
=========================================================*/

const progressBars=document.querySelectorAll(".progress-bar");

progressBars.forEach(bar=>{

    const width=bar.dataset.progress;

    if(width){

        bar.style.width="0%";

        setTimeout(()=>{

            bar.style.transition="1.5s ease";

            bar.style.width=width+"%";

        },300);

    }

});


/*=========================================================
                FLOATING CARD EFFECT
=========================================================*/

dashboardCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*=========================================================
                QUICK ACTIONS
=========================================================*/

const quickCards=document.querySelectorAll(".quick-card");

quickCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const page=card.dataset.page;

        if(page){

            window.location.href=page;

        }

    });

});


/*=========================================================
                ACTIVE CARD
=========================================================*/

dashboardCards.forEach(card=>{

    card.addEventListener("click",()=>{

        dashboardCards.forEach(c=>{

            c.classList.remove("selected-card");

        });

        card.classList.add("selected-card");

    });

});


/*=========================================================
                LIVE CLOCK
=========================================================*/

const liveClock=document.querySelector(".live-clock");

function updateClock(){

    if(!liveClock) return;

    const now=new Date();

    liveClock.innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


/*=========================================================
                LIVE DATE
=========================================================*/

const liveDate=document.querySelector(".live-date");

function updateDate(){

    if(!liveDate) return;

    const now=new Date();

    liveDate.innerHTML=now.toLocaleDateString(

        "en-IN",

        {

            weekday:"long",

            day:"numeric",

            month:"long",

            year:"numeric"

        }

    );

}

updateDate();


/*=========================================================
                RANDOM GREETING
=========================================================*/

const greeting=document.querySelector(".greeting");

if(greeting){

    const hour=new Date().getHours();

    let text="";

    if(hour<12){

        text="Good Morning ☀️";

    }

    else if(hour<17){

        text="Good Afternoon 🌤️";

    }

    else{

        text="Good Evening 🌙";

    }

    greeting.innerHTML=text;

}


/*=========================================================
                SERVICE STATUS
=========================================================*/

const statusBadges=document.querySelectorAll(".status");

statusBadges.forEach(status=>{

    const value=status.innerText.toLowerCase();

    if(value.includes("active")){

        status.classList.add("operational");

    }

    if(value.includes("completed")){

        status.classList.add("operational");

    }

    if(value.includes("maintenance")){

        status.classList.add("maintenance");

    }

    if(value.includes("pending")){

        status.classList.add("warning");

    }

});


/*=========================================================
                AUTO REFRESH TIMER
=========================================================*/

let refreshSeconds=300;

const refreshLabel=document.querySelector(".refresh-timer");

if(refreshLabel){

    setInterval(()=>{

        refreshSeconds--;

        refreshLabel.innerHTML=

        `Refreshing in ${refreshSeconds}s`;

        if(refreshSeconds<=0){

            location.reload();

        }

    },1000);

}


/*=========================================================
                DASHBOARD SUMMARY
=========================================================*/

function updateDashboardSummary(){

    const totalCards=document.querySelectorAll(".lift-card").length;

    const summary=document.querySelector(".dashboard-summary");

    if(summary){

        summary.innerHTML=

        `Total Lift Records : ${totalCards}`;

    }

}

updateDashboardSummary();

/*=========================================================
        LAVISH ENTERPRISE CUSTOMER PORTAL
                user.js
                PART - 3
=========================================================*/


/*=========================================================
            COMPLAINT FORM VALIDATION
=========================================================*/

const complaintForm = document.querySelector("#complaintForm");

if (complaintForm) {

    complaintForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const liftID =
            document.querySelector("#liftId").value.trim();

        const title =
            document.querySelector("#issueTitle").value.trim();

        const description =
            document.querySelector("#issueDescription").value.trim();

        if (
            liftID === "" ||
            title === "" ||
            description === ""
        ) {

            showToast(
                "Please fill all complaint details",
                "error"
            );

            return;
        }

        const ticketID =
            generateID("CMP-");

        alert(
            "Complaint Registered Successfully\n\nTicket : " +
            ticketID
        );

        complaintForm.reset();

    });

}


/*=========================================================
            PROFILE FORM VALIDATION
=========================================================*/

const profileForm = document.querySelector("#profileForm");

if (profileForm) {

    profileForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.querySelector("#email");

        const phone =
            document.querySelector("#phone");

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value)) {

            showToast(
                "Invalid Email Address",
                "error"
            );

            return;

        }

        if (phone.value.length < 10) {

            showToast(
                "Invalid Phone Number",
                "error"
            );

            return;

        }

        showToast(
            "Profile Updated Successfully"
        );

    });

}


/*=========================================================
            PASSWORD VALIDATION
=========================================================*/

const passwordForm =
document.querySelector("#passwordForm");

if (passwordForm) {

passwordForm.addEventListener(

"submit",

function(e){

e.preventDefault();

const newPass=
document.querySelector("#newPassword").value;

const confirmPass=
document.querySelector("#confirmPassword").value;

if(newPass!==confirmPass){

showToast(
"Passwords do not match",
"error"
);

return;

}

showToast(
"Password Updated Successfully"
);

});

}


/*=========================================================
            IMAGE PREVIEW
=========================================================*/

const profileImage =
document.querySelector("#profileImage");

const preview =
document.querySelector("#previewImage");

if(profileImage && preview){

profileImage.addEventListener(

"change",

function(){

const file=this.files[0];

if(file){

preview.src=
URL.createObjectURL(file);

}

});

}


/*=========================================================
            FILE VALIDATION
=========================================================*/

const complaintFile =
document.querySelector("#complaintImage");

if(complaintFile){

complaintFile.addEventListener(

"change",

function(){

const file=this.files[0];

if(!file) return;

if(file.size>

5*1024*1024){

showToast(
"Maximum file size is 5MB",
"error"
);

this.value="";

}

});

}


/*=========================================================
            DOWNLOAD INVOICE
=========================================================*/

const invoiceButtons=
document.querySelectorAll(".download-btn");

invoiceButtons.forEach(button=>{

button.addEventListener(

"click",

()=>{

showToast(

"Invoice Download Started"

);

setTimeout(()=>{

alert(

"Invoice Download Completed"

);

},1200);

});

});


/*=========================================================
            PAYMENT BUTTON
=========================================================*/

const paymentButton=
document.querySelector("#payNow");

if(paymentButton){

paymentButton.addEventListener(

"click",

()=>{

const confirmPayment=

confirm(

"Proceed to Payment?"

);

if(confirmPayment){

showToast(

"Redirecting to Payment Gateway"

);

}

});

}


/*=========================================================
            PAYMENT METHOD
=========================================================*/

const paymentMethods=
document.querySelectorAll(".payment-method");

paymentMethods.forEach(method=>{

method.addEventListener(

"click",

()=>{

paymentMethods.forEach(item=>{

item.classList.remove("selected");

});

method.classList.add("selected");

});

});


/*=========================================================
            CHAT SYSTEM
=========================================================*/

const sendButton=
document.querySelector("#sendMessage");

const messageInput=
document.querySelector("#chatInput");

const chatMessages=
document.querySelector(".chat-messages");

if(sendButton){

sendButton.addEventListener(

"click",

sendChatMessage

);

}

if(messageInput){

messageInput.addEventListener(

"keypress",

e=>{

if(e.key==="Enter"){

sendChatMessage();

}

});

}

function sendChatMessage(){

if(!messageInput||

!chatMessages) return;

const text=
messageInput.value.trim();

if(text==="") return;

const message=

document.createElement("div");

message.className=

"message user-message";

message.innerHTML=

`

<div class="message-content">

${text}

</div>

`;

chatMessages.appendChild(message);

messageInput.value="";

chatMessages.scrollTop=

chatMessages.scrollHeight;

setTimeout(

()=>{

autoReply();

},

1200

);

}


/*=========================================================
            AUTO REPLY
=========================================================*/

function autoReply(){

if(!chatMessages) return;

const reply=

document.createElement("div");

reply.className=

"message support-message";

reply.innerHTML=

`

<div class="message-content">

Thank you for contacting LAVISH Support.

Our executive will assist you shortly.

</div>

`;

chatMessages.appendChild(reply);

chatMessages.scrollTop=

chatMessages.scrollHeight;

}


/*=========================================================
            SEARCH PAYMENT
=========================================================*/

const paymentSearch=
document.querySelector("#paymentSearch");

if(paymentSearch){

paymentSearch.addEventListener(

"keyup",

function(){

const value=

this.value.toLowerCase();

const cards=

document.querySelectorAll(

".billing-card"

);

cards.forEach(card=>{

const text=

card.innerText.toLowerCase();

card.style.display=

text.includes(value)

?

"flex"

:

"none";

});

});

}

function playSuccess(){

const audio=

new Audio(

"../sounds/success.mp3"

);

audio.play();

}

/*=========================================================
        LAVISH ENTERPRISE CUSTOMER PORTAL
                user.js
                PART - 4
=========================================================*/


/*=========================================================
                TOAST NOTIFICATION
=========================================================*/

function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.innerHTML = `
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}


/*=========================================================
                NOTIFICATION COUNTER
=========================================================*/

const badge = document.querySelector(".badge");

const notificationCards = document.querySelectorAll(".notification-card");

function updateNotificationCount() {

    if (!badge) return;

    const unread = document.querySelectorAll(".notification-card.unread");

    badge.innerText = unread.length;

}

updateNotificationCount();


/*=========================================================
                MARK AS READ
=========================================================*/

notificationCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.remove("unread");

        updateNotificationCount();

    });

});


/*=========================================================
                DELETE NOTIFICATION
=========================================================*/

document.querySelectorAll(".delete-notification")

.forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".notification-card");

        if (card) {

            card.remove();

            updateNotificationCount();

            showToast("Notification Deleted");

        }

    });

});


/*=========================================================
                TECHNICIAN TRACKING
=========================================================*/

const eta = document.querySelector(".eta-time");

if (eta) {

    let minutes = 25;

    setInterval(() => {

        if (minutes > 0) {

            minutes--;

            eta.innerText = minutes + " Minutes";

        }

    }, 60000);

}


/*=========================================================
                LIVE LOCATION
=========================================================*/

const technicianLocation = document.querySelector(".tech-location");

if (technicianLocation) {

    const locations = [

        "Technician left service center",

        "Technician reached Highway",

        "Technician near your area",

        "Technician arriving shortly"

    ];

    let index = 0;

    setInterval(() => {

        technicianLocation.innerText = locations[index];

        index++;

        if (index >= locations.length)

            index = locations.length - 1;

    }, 10000);

}


/*=========================================================
                LOADING SPINNER
=========================================================*/

function showLoader() {

    const loader = document.querySelector(".loader");

    if (loader)

        loader.style.display = "flex";

}

function hideLoader() {

    const loader = document.querySelector(".loader");

    if (loader)

        loader.style.display = "none";

}


/*=========================================================
                MODAL POPUP
=========================================================*/

const modal = document.querySelector(".modal");

const openModal = document.querySelectorAll("[data-modal]");

const closeModal = document.querySelector(".close-modal");

openModal.forEach(btn => {

    btn.addEventListener("click", () => {

        if (modal)

            modal.classList.add("active");

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.classList.remove("active");

    });

}

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});


/*=========================================================
                DARK MODE
=========================================================*/

const darkSwitch = document.querySelector(".theme-toggle");

if (darkSwitch) {

    darkSwitch.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(

            "lavishTheme",

            document.body.classList.contains("dark")

                ? "dark"

                : "light"

        );

    });

}

window.addEventListener("load", () => {

    const theme = localStorage.getItem("lavishTheme");

    if (theme === "dark") {

        document.body.classList.add("dark");

    }

});


/*=========================================================
                AUTO SAVE
=========================================================*/

const inputs = document.querySelectorAll(

"input,textarea,select"

);

inputs.forEach(input => {

    const key = input.id;

    if (!key) return;

    const value = localStorage.getItem(key);

    if (value)

        input.value = value;

    input.addEventListener("input", () => {

        localStorage.setItem(

            key,

            input.value

        );

    });

});


/*=========================================================
                CLEAR STORAGE
=========================================================*/

function clearSavedData() {

    localStorage.clear();

    showToast("Saved Data Cleared");

}


/*=========================================================
                ONLINE / OFFLINE
=========================================================*/

window.addEventListener("online", () => {

    showToast(

        "Internet Connected"

    );

});

window.addEventListener("offline", () => {

    showToast(

        "Internet Disconnected",

        "error"

    );

});


/*=========================================================
                END OF PART 4
=========================================================*/


/*=========================================================
        LAVISH ENTERPRISE CUSTOMER PORTAL
                user.js
                PART - 5 (FINAL)
=========================================================*/


/*=========================================================
                MONTHLY SERVICE CHART
=========================================================*/

const serviceCanvas = document.getElementById("serviceChart");

if (serviceCanvas && typeof Chart !== "undefined") {

    new Chart(serviceCanvas, {

        type: "line",

        data: {

            labels: [

                "Jan",

                "Feb",

                "Mar",

                "Apr",

                "May",

                "Jun"

            ],

            datasets: [

                {

                    label: "Services",

                    data: [12,18,16,25,22,30],

                    borderColor: "#2563EB",

                    backgroundColor: "rgba(37,99,235,.15)",

                    fill: true,

                    tension: .4

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

}


/*=========================================================
                REVENUE CHART
=========================================================*/

const revenueCanvas = document.getElementById("revenueChart");

if (revenueCanvas && typeof Chart !== "undefined") {

    new Chart(revenueCanvas, {

        type: "bar",

        data: {

            labels: [

                "Jan",

                "Feb",

                "Mar",

                "Apr",

                "May",

                "Jun"

            ],

            datasets: [

                {

                    label: "Revenue",

                    data: [

                        12000,

                        18000,

                        15000,

                        25000,

                        22000,

                        28000

                    ],

                    backgroundColor: "#2563EB"

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

}


/*=========================================================
                LIVE CLOCK
=========================================================*/

const liveClock = document.querySelector(".live-clock");

function updateLiveClock() {

    if (!liveClock) return;

    const now = new Date();

    liveClock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateLiveClock,1000);

updateLiveClock();


/*=========================================================
                LIVE DATE
=========================================================*/

const liveDate = document.querySelector(".live-date");

function updateLiveDate(){

    if(!liveDate) return;

    liveDate.innerHTML =

    new Date().toLocaleDateString(

        "en-IN",

        {

            weekday:"long",

            day:"numeric",

            month:"long",

            year:"numeric"

        }

    );

}

updateLiveDate();


/*=========================================================
                RANDOM GREETING
=========================================================*/

const greeting = document.querySelector(".greeting");

if(greeting){

    const hour = new Date().getHours();

    if(hour<12){

        greeting.innerHTML="Good Morning ☀️";

    }

    else if(hour<17){

        greeting.innerHTML="Good Afternoon 🌤️";

    }

    else{

        greeting.innerHTML="Good Evening 🌙";

    }

}


/*=========================================================
                AUTO DASHBOARD UPDATE
=========================================================*/

setInterval(()=>{

    document.querySelectorAll(".live-value")

    .forEach(value=>{

        const current = parseInt(value.innerText);

        if(!isNaN(current)){

            value.innerText =

            current +

            Math.floor(Math.random()*3);

        }

    });

},10000);


/*=========================================================
                KEYBOARD SHORTCUTS
=========================================================*/

document.addEventListener(

"keydown",

e=>{

if(e.ctrlKey && e.key==="k"){

e.preventDefault();

const search=document.querySelector(".search-box input");

if(search){

search.focus();

}

}

if(e.key==="Escape"){

document.querySelectorAll(".modal.active")

.forEach(modal=>{

modal.classList.remove("active");

});

}

});


/*=========================================================
                REFRESH BUTTON
=========================================================*/

const refreshButton = document.querySelector(".refresh-btn");

if(refreshButton){

refreshButton.addEventListener(

"click",

()=>{

location.reload();

});

}


/*=========================================================
                DASHBOARD SUMMARY
=========================================================*/

function dashboardSummary(){

const lifts=document.querySelectorAll(".lift-card").length;

const notifications=document.querySelectorAll(".notification-card").length;

const invoices=document.querySelectorAll(".invoice-card").length;

console.log(

`Dashboard Loaded

Lifts : ${lifts}

Notifications : ${notifications}

Invoices : ${invoices}`

);

}

dashboardSummary();


/*=========================================================
                AUTO SAVE TIME
=========================================================*/

const saveTime=document.querySelector(".save-time");

if(saveTime){

saveTime.innerHTML=

"Last Updated : "+

new Date().toLocaleTimeString();

}


/*=========================================================
                SYSTEM INFORMATION
=========================================================*/

console.log(

"%cLAVISH Enterprise Lift Management",

"font-size:20px;color:#2563EB;font-weight:bold"

);

console.log(

"Customer Portal Ready"

);

console.log(

"Version : 1.0"

);

console.log(

"Status : Running"

);


/*=========================================================
                APPLICATION INIT
=========================================================*/

function initializeApp(){

console.log(

"Initializing Dashboard..."

);

updateLiveDate();

updateLiveClock();

dashboardSummary();

}

window.addEventListener(

"DOMContentLoaded",

initializeApp

);


/*=========================================================
                END OF USER.JS
=========================================================*/