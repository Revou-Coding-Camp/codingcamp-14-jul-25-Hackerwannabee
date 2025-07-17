const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('hidden');
})

let userName = prompt("Hi, siapa nama kamu?");

if(!userName){
    userName = "Guest";
}

document.getElementById("welcome-text").innerText = `Hi ${userName}, Welcome to my website`;