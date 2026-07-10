// ==========================
// Custom Cursor
// ==========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if (cursor) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const registerForm = document.getElementById("registerForm");
// ==========================
// Login Form
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();

        const role = document.getElementById("role").value;

        try {

            const response = await fetch("http://localhost:5000/api/auth/login", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    email,

                    password,

                    role

                })

            });

            const data = await response.json();

            if (data.success) {

                localStorage.setItem("token", data.token);

                localStorage.setItem("user", JSON.stringify(data.user));

                alert("Login Successful!");

                switch (data.user.role) {

                    case "Administrator":

                        window.location.href = "../pages/admin/admin-dashboard.html";

                        break;

                    case "Employee":

                        window.location.href = "../pages/employee/employee-dashboard.html";

                        break;

                    case "Customer":

                        window.location.href = "../pages/user/user-dashboard.html";

                        break;

                    default:

                        alert("Unknown User Role");

                }

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            console.error(error);

            alert("Unable to connect to the server.");

        }

    });

}


// ==========================
// Feature Card Animation
// ==========================

const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 1000);

    }, 5000);

});

if (showRegister) {

    showRegister.addEventListener("click", function (e) {

        e.preventDefault();

        loginForm.style.display = "none";
        registerForm.style.display = "block";

    });

}

if (showLogin) {

    showLogin.addEventListener("click", function (e) {

        e.preventDefault();

        registerForm.style.display = "none";
        loginForm.style.display = "block";

    });

}

if (registerForm) {

    registerForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const full_name = document.getElementById("registerName").value;

        const email = document.getElementById("registerEmail").value;

        const phone = document.getElementById("registerPhone").value;

        const password = document.getElementById("registerPassword").value;

        const confirm = document.getElementById("confirmPassword").value;

        if (password !== confirm) {

            alert("Passwords do not match");

            return;

        }

        try {

            const response = await fetch("http://localhost:5000/api/auth/register", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    full_name,

                    email,

                    phone,

                    password,

                    role: "Customer"

                })

            });

            const data = await response.json();

            if (data.success) {

                alert("Registration Successful");

                registerForm.reset();

                registerForm.style.display = "none";

                loginForm.style.display = "block";

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            console.error(error);

            alert("Unable to connect to the server.");

        }

    });

}

document.getElementById("googleLoginBtn").addEventListener("click", () => {

    window.location.href =
        "http://localhost:5000/api/auth/google";

});