
document.querySelector('button').addEventListener('click', handleClick);

function handleClick(){
    console.log('I got clicked!');
    new Audio('./sounds/crash.mp3').play();
}

for (let i = 0; i < document.querySelectorAll('button').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', handleClick);
}