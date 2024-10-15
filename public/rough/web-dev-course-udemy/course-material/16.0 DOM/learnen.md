# JS Advanced Notes
```
document.firstElementChild.lastElementChild.firstElementChild.innerHTML = "dee";

document.querySelector('input').click(); // method
document.querySelector('.class > p').style.color = "red"; // property

document.location.href;
```
## Selecting HTML objects with JS:

```
document.getElementsByTagName("li") : returns HTML list of all list
document.getElementsByClassName('class-name') : returns list of objects
document.getElementById('id') : returns element object
```
## query selector uses exact CSS selector style like #ID or .CLASS or combining them
document.querySelector('css-selector') : unlike css, querySelector returns first found specific item; not all elements 
for instance, document.querySelector('a') --> returns the first link. So, to select the specific anchor element inside li

document.querySelector('ul > li:nth-child(3)').innerHTML = "Dee - the first";
document.querySelector('li:nth-child(2) a');
### for all element as NodeList object
document.querySelectorAll('li:nth-child(2) a') --> returns NodeList object; selects all


###### To change all anchors background color to white 
```
{
let anchors = document.querySelectorAll('a');

anchors
NodeList(4) [a, a, a, a]
anchors.forEach( a => console.log(a));
VM2716:1 <a href=​"#">​new link​</a>​
VM2716:1 <a href=​"https:​/​/​www.google.com">​Google​</a>​
VM2716:1 <a href=​"second">​Second​</a>​
VM2716:1 <a href=​"@">​another anchor element​</a>​

anchors.forEach( a => a.style.backgroundColor = 'white');
}
```
###### To change first anchors inside list element's color to red 

`document.querySelector('li a').style.color = 'red';`



## 118 lesson notes: manipulating selected HTML element
some tips:
- JS properties names are written using camel-case [reference guide](https://www.w3schools.com/jsref/dom_obj_style.asp)
- even numbers and values are set as string in JS

```
document.querySelector('h1').style.visibility = "hidden";
document.querySelector('a').style.visibility = 'hidden';
document.querySelector('a').style.opacity = 0;
document.querySelector('.btn').style.backgroundColor = 'yellow';

```

### separation of concern
```
To change HTML DOM object, I can work with:
document
element
attributes
collection
node list
domtokenlist
or styles

```
- Instead of changing the DOM object directly, use .classList to change 

```
document.querySelector('.btn').classList.toggle('class-name');
document.querySelector('.btn').classList.remove('class-name');
document.querySelector('.btn').classList.add('class-name'); <-- don't add . in the class-list name
```

## lecture 120 - textContent instead of innerHTML property
$.querySelector('h1').textContent = 'new text';
$.querySelector('h1').innerHTML = '<strong> new text </strong>';

## lecture 121 - changing HTML element's attributes
document.querySelector('a').attributes --> gets all the applied attributes as NamesNodeMap
 
#### Getting, setting or reading html attributes:

- To set or change new attribute or read value of a single attribute:
  
```
document.querySelector('a').getAttribute["href"];
document.querySelector('a').setAttribute["href", "value"];

```

```
var userInput = prompt("How do you do today?");

window.alert(`You have used ${userInput.length} letters, \
and can use remaining ${500 - userInput.length} letters`);

// higher order function

function calculator(num1, num2, method){
    let value = method(num1, num2);
    return value;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}
```

## section 18 - advanced JS concepts

- event listerners
- higher order functions
- audio media element
- switch statements
- JS objects & constructor functions
- object, method and dot notation

#### constructor function

function ConstructorFunc(name, age){
    this.name = name;
    this.age = age;
    this.SendSuitCase = function(){}
    moveSuitCase: function(){
        alert("May I take your suitcase?");
        pickUpSuitCase();
        move();
    }
    pickUpSuitCase : function(){
        alert("Pick up suitcase.");
        pickUp();
    }
}

let obj1 = new ConstructorFunc('Timmy', 12);
let obj2 = new ConstructorFunc('Alex', 9);
let obj3 = new ConstructorFunc('Mino', 14);