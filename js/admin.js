console.log("Admin Dashboard Loaded");

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-5px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});