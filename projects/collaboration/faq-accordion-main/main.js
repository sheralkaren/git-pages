const buttons = document.querySelectorAll('button');

buttons.forEach( button => {
    button.addEventListener('click', () => {
        // console.log(button.children[1].children[0].attributes['src'].nodeValue);
        const paragraph = button.nextElementSibling;
        
        paragraph.classList.toggle('show');

        const icon = button.children[1].children[0];

    // Check the current source and toggle the image
    if (icon.getAttribute('src') === './assets/images/icon-plus.svg') {
        icon.setAttribute('src', './assets/images/icon-minus.svg'); 
    } else {
        icon.setAttribute('src', './assets/images/icon-plus.svg'); 
    // console.log(icon.getAttribute('src'));
    }
});
})
