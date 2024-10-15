

let button = document.querySelector('button').addEventListener('click', () => {
    new Audio('./images/tom-4.mp3').play();
    let randomNumber1 = Math.floor((Math.random() * 6) + 1);
    let randomNumber2 = Math.floor((Math.random() * 6) + 1);
    let imageOne = document.querySelector(".img1").setAttribute('src',`./images/dice${randomNumber1}.png`);
    let imageTwo = document.querySelector(".img2").setAttribute('src', `./images/dice${randomNumber2}.png`);
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').textContent = "Player 1 Wins 🚩";
    } else if (randomNumber1 == randomNumber2) {
        document.querySelector('h1').textContent = "Oops, It's Draw 😑";
    } else {
        document.querySelector('h1').textContent = "Player 2 Wins 🚩";
    }
    document.querySelector('p:nth-child(3)').style.visibility = 'hidden';
})