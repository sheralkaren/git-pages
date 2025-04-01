

let button = document.querySelector('button').addEventListener('click', () => {
    new Audio('./images/tom-4.mp3').play();
    let lastRandomNumber = 1;
    console.log(lastRandomNumber);
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    if(randomNumber == lastRandomNumber) {
        randomNumber = Math.floor((Math.random() * 6) + 1);
    // while (randomNumber == lastRandomNumber) {
    //     randomNumber = Math.floor((Math.random() * 6) + 1);
    }
    lastRandomNumber = randomNumber;
    document.querySelector(".img1").setAttribute('src',`./images/dice${randomNumber}.png`);
    console.log(randomNumber);
    
    // [done] TODO: add functionality to change pronomen every turn
    switch(randomNumber) {
        case 1:
          document.querySelector("#pronomen").textContent = "Ich";
          break;
        case 2:
          document.querySelector("#pronomen").textContent = "Du";
          break;
        case 3:
          document.querySelector("#pronomen").textContent = "Er/sie/Es";
          break;
        case 4:
            document.querySelector("#pronomen").textContent = "Wir";
            break;
        case 5:
            document.querySelector("#pronomen").textContent = "Ihr";
            break;
        case 6:
            document.querySelector("#pronomen").textContent = "sie/Sie";
            break;
        default:
      }
})