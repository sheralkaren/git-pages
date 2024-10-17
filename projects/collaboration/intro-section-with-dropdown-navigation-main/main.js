let icon = document.querySelector('.burger-icon > span');
icon.addEventListener('click', (e) => {
    let navItem = document.querySelector('.nav');
    navItem.classList.toggle('show-nav');
    if (icon.innerHTML != 'x') {
        icon.innerHTML = 'x';
    }
    else{
        icon.innerHTML = "&#9776;";
    }

})

function openOverlay(){
    
}
