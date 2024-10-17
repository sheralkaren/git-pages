
document.querySelector('.burger-icon > span').addEventListener('click', (e) => {
    let navItem = document.querySelector('.nav');
    navItem.classList.toggle('show-nav');
    console.log(navItem.classList);
})

