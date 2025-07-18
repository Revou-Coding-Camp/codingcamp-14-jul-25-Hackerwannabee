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

document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('messageForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
        const currentTime = new Date().toString();

        output.innerHTML = `
            <p><strong>Current time :</strong> ${currentTime}</p>
            <p><strong>Nama :</strong> ${name}</p>
            <p><strong>Tanggal Lahir :</strong> ${dob}</p>
            <p><strong>Jenis Kelamin :</strong> ${gender}</p>
            <p><strong>Pesan :</strong> ${message}</p>
        `;

        form.reset();
    })

})