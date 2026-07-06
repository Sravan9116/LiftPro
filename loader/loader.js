const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let textPoints = [];

const textSequence = [
    "WELCOME",
    "TO",
    "LAVISH CES",
    "THANK YOU",
    "FOR CHOOSING US"
];

let currentIndex = 0;
let currentText = textSequence[0];

let exploded = false;
let explosionPower = 20;

/* ===================================
   PARTICLE CLASS
=================================== */

class Particle {

    constructor(x, y, targetX, targetY) {

        this.x = x;
        this.y = y;

        this.targetX = targetX;
        this.targetY = targetY;

        this.size = Math.random() * 3 + 1;

        this.speed = Math.random() * 0.08 + 0.02;

        this.color = "#00d4ff";

        this.vx = 0;
        this.vy = 0;
    }

    update() {

        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;

        this.vx += dx * this.speed;
        this.vy += dy * this.speed;

        this.vx *= 0.85;
        this.vy *= 0.85;

        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = this.color;

        ctx.shadowBlur = 30;
        ctx.shadowColor = "#00ffff";

        ctx.fill();
    }
}

/* ===================================
   TEXT TO PARTICLES
=================================== */

function createTextPoints(text) {

    const tempCanvas =
        document.createElement("canvas");

    const tempCtx =
        tempCanvas.getContext("2d");

    tempCanvas.width =
        canvas.width;

    tempCanvas.height =
        canvas.height;

    const fontSize =
        window.innerWidth < 768
            ? 55
            : 110;

    tempCtx.clearRect(
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
    );

    tempCtx.fillStyle = "white";

    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";

    tempCtx.font =
        `bold ${fontSize}px Arial`;

    tempCtx.fillText(
        text,
        tempCanvas.width / 2,
        tempCanvas.height / 2
    );

    const imageData =
        tempCtx.getImageData(
            0,
            0,
            tempCanvas.width,
            tempCanvas.height
        );

    const pixels =
        imageData.data;

    textPoints = [];

    for (let y = 0; y < tempCanvas.height; y += 6) {

        for (let x = 0; x < tempCanvas.width; x += 6) {

            const index =
                (y * tempCanvas.width + x) * 4;

            if (pixels[index + 3] > 128) {

                textPoints.push({
                    x: x,
                    y: y
                });
            }
        }
    }
}

/* ===================================
   CREATE PARTICLES
=================================== */

function createParticles() {

    particles = [];

    for (const point of textPoints) {

        const edge =
            Math.floor(Math.random() * 4);

        let startX;
        let startY;

        if (edge === 0) {

            startX =
                Math.random() * canvas.width;

            startY = -100;
        }

        else if (edge === 1) {

            startX =
                canvas.width + 100;

            startY =
                Math.random() * canvas.height;
        }

        else if (edge === 2) {

            startX =
                Math.random() * canvas.width;

            startY =
                canvas.height + 100;
        }

        else {

            startX = -100;

            startY =
                Math.random() * canvas.height;
        }

        particles.push(

            new Particle(
                startX,
                startY,
                point.x,
                point.y
            )

        );
    }
}

createTextPoints(currentText);
createParticles();
console.log("Loader Started");
console.log("Current Text:", currentText);
console.log("Text Points:", textPoints.length);


/* ===================================
   EXPLOSION EFFECT
=================================== */

function explodeParticles() {

    particles.forEach(p => {

        const angle =
            Math.random() *
            Math.PI * 2;

        const force =
            Math.random() *
            explosionPower + 10;

        p.vx =
            Math.cos(angle) * force;

        p.vy =
            Math.sin(angle) * force;
    });

    exploded = true;
}

/* ===================================
   BACKGROUND PARTICLES
=================================== */

const bgParticles = [];

for (let i = 0; i < 150; i++) {

    bgParticles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 1,

        speed: Math.random() * 0.5 + 0.2
    });
}

function drawBackgroundParticles() {

    bgParticles.forEach(p => {

        p.y += p.speed;

        if (p.y > canvas.height) {

            p.y = -10;

            p.x =
                Math.random() * canvas.width;
        }

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0,212,255,.3)";

        ctx.fill();
    });
}

/* ===================================
   ANIMATION LOOP
=================================== */

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawBackgroundParticles();

    particles.forEach(p => {

        p.update();
        p.draw();
    });

    requestAnimationFrame(
        animate
    );
}

animate();


/* ===================================
   TEXT SEQUENCE
=================================== */

function showNextText() {

    explodeParticles();

    setTimeout(() => {

        currentIndex++;

        if (
            currentIndex <
            textSequence.length
        ) {

            currentText =
                textSequence[currentIndex];

            createTextPoints(
                currentText
            );

            createParticles();

            exploded = false;
        }

    }, 1200);
}

/* ===================================
   TEXT TIMELINE
=================================== */

setTimeout(showNextText, 3000);
setTimeout(showNextText, 6000);
setTimeout(showNextText, 9000);
setTimeout(showNextText, 12000);

/* ===================================
   LOADER END
=================================== */

setTimeout(() => {

    document
        .getElementById("loader")
        .classList.add("hide");

}, 16000);

setTimeout(() => {

    document
        .getElementById("mainContent")
        .style.display = "flex";

}, 17000);

/* ===================================
   WINDOW RESIZE
=================================== */

window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

        createTextPoints(
            currentText
        );

        createParticles();
    }
);

/* ===================================
   ENERGY EFFECT
=================================== */

setInterval(() => {

    if (exploded) return;

    const randomParticle =

        particles[
        Math.floor(
            Math.random() *
            particles.length
        )
        ];

    if (randomParticle) {

        randomParticle.vx +=
            (Math.random() - 0.5) * 5;

        randomParticle.vy +=
            (Math.random() - 0.5) * 5;
    }

}, 100);

console.log(
    "LiftPro Particle Loader Ready"
);


if(
    sessionStorage.getItem(
        "loaderShown"
    )
){

    document
    .getElementById("loader")
    .style.display = "none";

    document
    .getElementById("mainContent")
    .style.display = "block";

}
else{

    sessionStorage.setItem(
        "loaderShown",
        "true"
    );

}

/* ===========================
   REDIRECT TO LOGIN PAGE
=========================== */

setTimeout(() => {

    globalThis.location.href =
    "pages/MainPage.html";

}, 16000);
