const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const role =
    document.getElementById("role").value;

    if(role === "Administrator"){

        alert("Redirecting to Admin Dashboard");

        window.location.href =
        "admin-dashboard.html";

    }

    else if(role === "Employee"){

        alert("Redirecting to Employee Dashboard");

        window.location.href =
        "employee-dashboard.html";

    }

    else{

        alert("Redirecting to Customer Dashboard");

        window.location.href =
        "user-dashboard.html";

    }

});

const cards =
document.querySelectorAll(".feature-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .style.opacity="0";

        setTimeout(()=>{

            document
            .getElementById("loader")
            .remove();

        },1000);

    },5000);

});
