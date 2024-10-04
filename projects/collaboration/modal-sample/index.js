const open = document.getElementById('open');
const close = document.getElementById('close');
const modal_container = document.getElementsByClassName('modal-container')[0];


console.log(modal_container.textContent);

open.addEventListener('click', () => {
    modal_container.classList.add("show");
    console.log("Button worked!");
})

close.addEventListener('click', () => {
    modal_container.classList.remove("show");
})