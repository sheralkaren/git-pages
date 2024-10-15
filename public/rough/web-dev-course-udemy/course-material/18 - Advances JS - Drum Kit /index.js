
// document.querySelector('button').addEventListener('click', handleClick);

function makeSound(key) {


    // make relevant sound
    switch (key) {
        case 'w':
            new Audio('./sounds/tom-1.mp3').play();
            break;
        case 'a':
            new Audio('./sounds/tom-2.mp3').play();
            break;
        case 's':
            new Audio('./sounds/tom-3.mp3').play();
            break;
        case 'd':
            new Audio('./sounds/tom-4.mp3').play();
            break;
        case 'j':
            new Audio('./sounds/crash.mp3').play();
            break;
        case 'k':
            new Audio('./sounds/kick-bass.mp3').play();
            break;
        case 'l':
            new Audio('./sounds/snare.mp3').play();
            break;

        default:
            console.log(`wrong key pressed: ${key}`);
            break;
    }
}

function handleAnimation(key){
    console.log(key);
    document.querySelector(`.${key}`).classList.add('pressed');
    setTimeout(() => {document.querySelector(`.${key}`).classList.remove('pressed')}, 150);
}
// detect mouse click
for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', (e) => {
        makeSound(e.target.innerHTML);
        handleAnimation(e.target.innerHTML);
});
}

// detect keyboard press
document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    handleAnimation(event.key);
});