// var name = prompt("write your tweet below to gain a follower:");

// var fLetter = name.slice(0,1).toUpperCase();
// var restOfTweet = name.slice(1,name.length).toLowerCase();

// window.alert(`Your commment is: ${fLetter}${restOfTweet}`);


// dogAge = prompt("Enter your dog age to see how old a person the dog is!");

// humanAge = (dogAge - 2) * 4 + 21;

// window.alert(`Your dog is almost ${humanAge} y.o`);

// var n = Math.random();


// console.log(Math.round(n*10));

// Leap year logic

// function IsLeapYear(year){
//     if (year % 4 == 0){
//         if(year % 100 == 0){
//             if(year % 400 == 0){
//                 alert( year + ' is a leap year');
//             }
//             else {
//                 alert( year + ' is not a leap year');
//             }
            
//         }
//         else {
//             alert( year + ' is a leap year')
//         }
        
//     }
//     else {
//         alert( year + ' is not a leap year');
//     }
// }


// year = prompt('Enter an year to check if its a leap year?');
// window.alert(IsLeapYear(year));

//## 

// ## https://www.99-bottles-of-beer.net/lyrics.html

/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

.
.
.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.

*/

var count = 99;

for(i=0; i <= 0; i--){
    
    if (count > 1){
    console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.
                Take one down and pass it around, ${count - 1 } bottles of beer on the wall.`)
    } 
    else if (count == 1){
    console.log(`${count} bottle of beer on the wall, ${count} bottle of beer.
        Take one down and pass it around, no more bottles of beer on the wall.`)
    }
    else {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.
                    Go to the store and buy some more, 99 bottles of beer on the wall.`)
    }
    
    count--;
}

//## 


function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
     var numberOfDaysLeft = (100*365) - (age*365);
     
     var numberOfMonthsLeft = (100*12) - (age*12);
     
     var numberOfWeeksLeft = (100*52) - (age*52);
     var numberOfYearsLeft = 100 - age;
     
     console.log(`You have ${numberOfDaysLeft} days, ${numberOfWeeksLeft} weeks, ${numberOfMonthsLeft} months, and ${numberOfYearsLeft} years left.`)
    
    }
    
    lifeInWeeks(33);

   // ### FIZZBUZZ leetcode


function determineWhatToPrint(num){
    if (num % 3 == 0 && num % 5 == 0 && num != 0){
        return "FizzBuzz";
    }
    else if (num % 3 == 0){
        return "Fizz";
    }
    else if (num % 5 == 0 ){
        return "Buzz";x
    }
    else {
        return num;
    }
    
}

for (var i = 1; i <= 100; i++){

    console.log(determineWhatToPrint(i));
}


// #########
var output = [];
output.push(1);

function fizzBuzz(){
    output.push(output[output.length -1] + 1);
    console.log(output);
}


var count = 99;

while (count >= 0){
    
    if (count > 1){
    console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.
                Take one down and pass it around, ${count - 1 } bottles of beer on the wall.`)
    } 
    else if (count == 1){
    console.log(`${count} bottle of beer on the wall, ${count} bottle of beer.
        Take one down and pass it around, no more bottles of beer on the wall.`)
    }
    else {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.
                    Go to the store and buy some more, 99 bottles of beer on the wall.`)
    }
    
    count--;
}