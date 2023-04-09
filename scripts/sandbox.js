// adding hello world ads screen
// alert('hello world hehe.');

// adding some console log in chrome
console.log(2+2);

// adding let vars for console
let age = 28;
let year = 2023;
console.log(age, year);
age = 30; // changing var
console.log(age, year); // the change is applied

// adding const var
const maxScore = 100;
// maxScore = 50; // const var can't be reassigned/overriden
console.log(maxScore);

// var variable for older browser
var score = 57;
console.log(score);

// concatenate (join) two strings
let userMail = 'alfi';
let mailDomain = '@istamosh.com';

let mail = userMail + mailDomain;
console.log(mail);

// cherrypick letter from string
console.log(userMail[2]);

// count every letter
console.log(mail.length);

// change whole string to uppercase
console.log(mail.toUpperCase());

// store username in Uppercase
let nameUpper = userMail.toUpperCase();
console.log(nameUpper);

// find a letter position number of mail
console.log(mail.indexOf('i'));

// find last occurence of letter position of mail
console.log(mail.lastIndexOf('i'));

// slice the mail domain only (hardcode way)
let sliced = mail.slice(5, 13);
console.log(sliced);

// substring mail
let substringed = mail.substring(4, 10);
console.log(substringed);

// replace first occurence of a letter in mail
let replacedLetter = mail.replace('f', '_');
console.log(replacedLetter);

// can calculate area of circle, don't need to declare integer type
let r = 10;
const pi = 3.14;
let circleArea = pi * r**2;
console.log(circleArea);

// modulo operation
let remainder = r % 3;
console.log(remainder);

// remember order of operation - P E M D A S
let pemdas = 5 / (10-3)**2;
console.log('pemdas', pemdas);

// shorthand by 1
let amount = 10;
amount++;
console.log('amount++', amount);

// more shorthand notation
let notation = 10;
notation /= 2;
console.log('notation/=2', notation);

// NaN error (not a number)
let nan = 10;
console.log('NaN:', nan / 'hello');

// concat several words
let wordConcat = 'this is ' + 'Istamosh.';
console.log(wordConcat);

// more concat strings
const nameMe = 'Istamosh';
const live = 'Ohio';
const yearBirth = '1991';
const title = 'Istamosh Website';
let concatStrings = 'My name is '+nameMe+' and i live in '+live+' on year '+yearBirth;
console.log(concatStrings);

// template string concat
let concatTemplate = `My name is ${nameMe} and i live in ${live} on year ${yearBirth}`;

// creating HTML template
let htmlTemplate = `
    <h2>${title}</h2>
    <p>By ${nameMe}</p>
    <span>Currently living in ${live} from ${yearBirth}</span>
`;

console.log(htmlTemplate);

// declaring array
let array = ['creedmoor', 'savage', 'casull', 'remington', 'ruger', 'marlin', 'british'];
console.log(array);

// accessing value of array
console.log(array[2]);

// replacing certain value with new one
array[2] = 'lapua magnum';
console.log(array[2]);

// count the contents of an array
console.log(array.length);

// array method to join every element as one
let mergedContent = array.join(', ');
console.log(mergedContent);

// array indexOf method to know the position inside array
let indexOfSomething = array.indexOf('marlin');
console.log(indexOfSomething);

// concat another array after the end of main array
let anotherArray = ['spencer', 'beowulf'];
console.log(array.concat(anotherArray));

// push an element inside main array and changes the main array
let pushing = array.push('nitro');
console.log(array);

// pop method is removing last one element of an array
let poppedElement = array.pop();
console.log(array);
// and yet you can still retrieve popped element from the said array
console.log(poppedElement);

// undefined, NaN (Not a Number), template string example
let blank;
console.log(blank, blank+3, `this variable is ${blank}.`);

// null value test
let nullVar = null;
console.log(nullVar, nullVar+3, `this variable is ${nullVar}.`);

// boolean example and comparison with string version
console.log(true, false, 'true', 'false');

// includes string method to determine boolean
let email = 'alfi@istamosh.com';
let calibers = ['savage', 'nitro', 'steyr'];

let excMark = email.includes('!');
let caliber = calibers.includes('nitro');

console.log(excMark, caliber);

// more boolean comparator
let adult = 18;

console.log(adult == 18); // will be true
console.log(adult != 18); // will be false
console.log(adult == 20); // will be false
console.log(adult > 20); // will be false
console.log(adult < 20); // will be true
console.log(adult <= 18); // will be true
console.log(adult >= 19); // will be false

console.log('---------');
let people = 'istamosh';

console.log(people == 'istamosh'); // will be true since it's matched
console.log(people == 'Istamosh'); // will be false since it's uppercased
console.log(people > 'amos'); // will be true since first letter is beyond 'a'
console.log(people > 'moshimoshi'); // will be false since 'm' is higher than 'i' 
console.log(people > 'Istamosh'); // will be true since 'i' > 'I' (lowercase is winner here)
console.log(people > 'Amos') // will be true regardless, same as above

// loose comparison (diff. types can still be equal)
let adultAge2 = 25;
console.log(adultAge2 == 25); // true
console.log(adultAge2 == '25'); // true
console.log(adultAge2 != 25); // false
console.log(adultAge2 != '25'); // false

// strict comparison (two compared data must be same types)
console.log(adultAge2 === 25); // true
console.log(adultAge2 === '25'); // false
console.log(adultAge2 !== 25); // false
console.log(adultAge2 !== '25'); // true

// data type conversion
let someScore = '99';
// this will append 1 as string at the end
console.log(someScore + 1); // 991 as str
// convert again
someScore = Number(someScore);
console.log(someScore + 1); // 100 as int

// string conversion and then show its data type
let fifty = 50;
fifty = String(fifty);
console.log(fifty, `as ${typeof fifty} data type.`);

// boolean conversion
// these all explicit data type conversion, from the above
console.log(Boolean(fifty)); // will be true
console.log(Boolean(-19)); // will be true
console.log(Boolean(0)); // will be false
console.log(Boolean('0')); // will be true
console.log(Boolean('')); // will be false
console.log(Boolean(' ')); // will be true

// loops example
for(let i = 0; i < 5; i++){
    console.log('loop counter:', i);
}
console.log('loop finished.');

// iterate and count a set of array
console.log('-------');
const caliberList = ['.22 LR', '9mm', '.45 ACP'];
for(let i = 0; i < caliberList.length; i++){
    console.log(i+1, caliberList[i]);
}

// cycle/iterate through every array element using HTML template string
console.log('-------');
for(let i = 0; i < caliberList.length; i++){
    let html = `<div>${caliberList[i]}</div>`;
    console.log(html);
}

// while loops, is same principle as for loops
// but prone to infinite loop if not handled inside block
console.log('-------');
let i = 0;

while(i < 5){
    console.log('in loop:', i);
    i++;
}

// lets use above caliberList array to iterate those with while loop
// i is already declared, just reset it to zero again
console.log('-------');
i = 0;

while(i < caliberList.length){
    console.log(caliberList[i]);
    i++;
}

// Do While Loop example
// reset i again
console.log('-------');
i = 3;

do{
    console.log('current value of i is:', i);
    i++;
} while (i < 5);

// Do While Loop op. with array
// exclude first element occurence
console.log('-------');
i = 1;

do{
    console.log(caliberList[i]);
    i++;
} while (i < caliberList.length);

// basic if statement
const marriedAge = 25;

if(marriedAge > 20){
    console.log('you are over 20 yo');
} // log will show aka true

// if statement w/ array length
const ARs = ['AK47', 'M4', 'AUG', 'G3'];

if(ARs.length > 3){
    console.log("that's alot of Assault Rifles!");
} // true

// if check for string length
let pass = 'p@ssword12345';

// check if password length is 8 or more
// but first if reaches 12 or more give special feedback
// if not, give explanation w/ else clause codeblock
// else clause will prevent multiple/parallel conditions meet
if(pass.length >= 12){
    console.log('that password is mad strong')
} else if(pass.length >= 8){
    console.log('that password is acceptable');
} else {
    console.log('password need to be 8 or more characters!');
}

// logical operator on if statement
// || - OR , && - AND
console.log('-------');
pass = 'passwordpassword';

if(pass.length >= 12 && pass.includes('.')){
    console.log('the password is strongest');
} else if (pass.length >= 8 || pass.includes('.') && pass.length >= 5){
    console.log('the password is acceptable');
} else {
    console.log('password must be at least 8 chars or at least 5 chars with dotted(.) character');
}

// logical NOT (!)
let auth = false;
// NOT as inverted statement
if(!auth){
    console.log('you are not authorized yet');
}

// break and continue statement
// break from for loop if meet 100 score.
// ignore current loop iteration when hits zero score and continue
console.log('-------');
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){
    if (scores[i] === 0){
        continue;
    } else if (scores[i] === 100){
        console.log(`shooting score: ${scores[i]}. This John Wick was once top scored! Finished searching.`);
        break;
    } else {
        console.log(`shooting score: ${scores[i]}.`);
    }
}

// switch statements
// using if can be tiresome, so use switch
// but switch will run the rest of the cases and default if the said case are met
// to prevent this use break statement for essential cases; unless default
// the switch statement is using strict comparator i.e. must be same data type (===)
console.log('-------');
const grade = 'B';

switch (grade){
case 'A':
    console.log('You got an A');
    break;
case 'B':
    console.log('You got a B');
    break;
case 'C':
    console.log('You got a C');
    break;
case 'D':
    console.log('You got a D');
    break;
case 'E':
    console.log('You got an E');
    break;
case 'F':
    console.log('You got a F');
    break;
default:
    console.log('This is incorrect grade');
}

// variables and block scope
// can't declare same varname on same scope
// but can be redeclared inside other (local) scope, even with const var
console.log('-------');
const scopedNumber = 30;
let scopedName;

if(true){
    // local scope
    const scopedNumber = 40;
    let scopedName = 'istamosh';
    console.log('inside code block:', scopedNumber, scopedName); // result is 40 istamosh
    if(true){
        // nested local scope
        const scopedNumber = 50;
        console.log('inside nested block:', scopedNumber, scopedName); // result is 50 istamosh
    }
}
// global scope
console.log('outside code block:', scopedNumber, scopedName); // result is 30 undefined

// functions declaration
// defining the code inside a function, can be called anytime

// run the function
salute();
salute();
salute();
// below function is hoisted, meaning we can call it even the function is placed on the bottom
function salute(){
    console.log('salutations!');
}

// function expression, CAN'T be hoisted, but good for jumbled code prevention
const speak = function(){
    console.log('good day to you!');
}

speak();
speak();

// arguments and parameters
console.log('-------');
const greet = function(name, time){
    console.log(`good ${time}, ${name}!`);
}

// pass the Istamosh value (args) into name params
greet(); // will contain undefined
greet('Istamosh', 'morning'); // this is the proper one

// for new liner aesthetic purpose
function nl(){
    console.log('-------');
}
// another example w/ pre-assigned value
const greet2 = function(name = 'luigi', time = 'evening'){
    console.log(`good ${time}, ${name}!`);
}

greet2(); // declare w/o values
greet2('mario') // declare w/o 2nd value

// calc. circle area formula (phi*r(2))
// by calc. given radius from the caller
// then return the result back to caller
nl();
const calcArea = function(radius){
    return area = 3.14 * radius**2;
}

const resultArea = calcArea(5);
console.log('area of circle: '+resultArea);

// arrow/chevron function (modern but same function)
// only for 1 param
nl();
const calcArea2 = radius => 3.14 * radius**2;

const resultArea2 = calcArea2(5);
console.log('area of circle: '+resultArea2);

// for 2 or more params
// calc. cylinder volume (phi*r(2)*h)
nl();
const cylinderVolume = (radius, height) => {
    return 3.14 * radius**2 * height;
}

console.log('volume of cylinder: ' +cylinderVolume(5,8));

// for no parameter function
nl();
const formulaCylinderVolume = () => {
    return `Cylinder Volume is: π r2 h`;
}

console.log(formulaCylinderVolume());

// simpler no param function
nl();
const formulaCircleArea = () => `Circle area is: π r2`;

console.log(formulaCircleArea());

// exercise shopping bill after tax
nl();
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
// have a several bills with 10% tax
let cart = [[10,15,30], 0.1];

console.log(bill(cart[0],cart[1]));

// methods
// just as functions with dot (.) notation beforehand
// method is for variable
nl();
let someName = 'istamosh';
someName = someName.toUpperCase();
console.log(someName);

// callback function
// function is an object, can be nested
// so it can be called by another function as params
// the order of display is: A B C 50 C D F
nl();
const myFunc = (callbackFunc) => {
    // do something
    console.log('B');
    let value = 50;
    callbackFunc(value);
    console.log('E');
}
console.log('A');
myFunc(function(val){
    // do something
    console.log('C');
    console.log(val);
    console.log('D');
});
console.log('F');

// modern callback example, same flow as above
nl();
const someFunction = (callbackFunc) => {
    // comes first until hits callbackFunc
    let score = 75;
    callbackFunc(score);
    // comes after callbackFunc (fourth)
}
// this line comes firstmost
someFunction(value => {
    // comes second
    console.log(value); // display
    // comes third
})
// this line comes last

// foreach method example
nl();
let rifleCaliber = ['5.56mm', '7.62mm', '7.35 Carcano', '.303 British', '.30-06 Springfield', '.300 Rook', '6.5 Arisaka'];

// this method will call 'calibers!' the same time as array total elements
rifleCaliber.forEach(function(){
    console.log('calibers!');
});

// this will call each caliber name (same as for loop)
nl();
rifleCaliber.forEach(function(names){
    console.log('caliber name: '+names);
});

// arrow format same as above
// since it's one param, no need a bracket ()
nl();
rifleCaliber.forEach(calName => {
    console.log('caliber name: '+calName);
})

// arrow format w/ 2 params
// taking indexes as 2nd params
// then pass those params into display
nl();
console.log('Warehouse ammunition:');
rifleCaliber.forEach((caliberName, indexNumber) => {
    console.log(`${indexNumber+1}. ${caliberName} cartridge.`);
})

// same as above, but with callbackFn
// it looks nice and simple
nl();
const logCartridges = (caliberName, indexNumber) => {
    console.log(`${indexNumber+1}. ${caliberName} cartridge.`);
}

console.log('Warehouse ammunition:');
rifleCaliber.forEach(logCartridges);

// insert a list into HTML
// declare an empty HTML field, then make templates of every lists
// append template into .warehouse class in index.html
// the template HTML can be logged too
const ul = document.querySelector('.warehouse');
let html = ``;

rifleCaliber.forEach(names => {
    html += `<li style="color: darkred">${names}</li>`
})

console.log(html);
ul.innerHTML = html;

// object literal
// using 'this' keyword to refer an object inside self
// func. properties inside object CANNOT be arrowed, using arrow func. will prohibit 'this'
nl();
let leeEnfield = {
    name: 'Lee Enfield SMLE Mk.III',
    mechanism: 'Bolt-action',
    damage: 70,
    caliber: '.303 British',
    magsize: 10,
    category: 'Rifle',
    // using objects inside array
    attachment: [
        { name: 'bayonet', weight: 0.3 },
        { name: 'sling', weight: 0.3}
    ],
    quickInspect: function(){
        console.log(`${this.name} is a ${this.mechanism.toLowerCase()} ${this.category.toLowerCase()} that contains ${this.magsize} bullet round(s).`);
    },
    inspectCartridge: function(){
        console.log(`This ${this.category.toLowerCase()} is chambered in ${this.caliber}.`);
    },
    // using simplified regular func
    inspectAttachment(){
        console.log(`Attachable mod(s):`);
        this.attachment.forEach(mod => {
            console.log('+ '+mod.name+', '+mod.weight+' kg');
        })
    }
};

console.log(leeEnfield);

// accessing full name using dot notation
console.log(leeEnfield.name);
// access using square bracket notation
console.log(leeEnfield['magsize']);
// changing one property
leeEnfield['category'] = 'Bolt-action rifle';
console.log(leeEnfield['category']);
// square bracket notation can be aliased as variable
const cartridge = 'caliber';
console.log(leeEnfield[cartridge]);
// viewing leeEnfield type of object
console.log(typeof leeEnfield);
// resetting changed properties
leeEnfield['category'] = 'Rifle';

// using object methods
leeEnfield.quickInspect();
leeEnfield.inspectCartridge();
leeEnfield.inspectAttachment();

// Math object
// viewing list of math functions
nl();
console.log(Math);

// Showing PI and Euler constant
console.log(Math.PI+'\n'+Math.E);

// Rounding
nl();
const someArea = 7.7;
console.log(Math.round(someArea)); // to nearest or ceil (8)
console.log(Math.floor(someArea)); // to bottom rounding (7)
console.log(Math.ceil(someArea)); // to top rounding (8)
console.log(Math.trunc(someArea)); // truncate decimal (7)

// Random number generator function 1-100
nl();
const randomNum = Math.random();
console.log(randomNum);
console.log(Math.round(randomNum * 100));

// primitive values
// stays in data stack (the vars) and particular change won't affect other
// integer, string is primitive value
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// reference values
// data stays in heap (the values) and any changes in variable would affect other vars
// array is considered heap value
// even in const variable it's still can change
const userOne = { name: 'istamosh', age: 28};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'gigachad';

console.log(userOne, userTwo);


