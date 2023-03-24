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
const pass = 'p@ssword12345';

// check if password length is 8 or more
// but first if reaches 12 or more give special feedback
// if not, give explanation w/ else clause codeblock
// else clause will prevent multiple/parallel conditions met
if(pass.length >= 12){
    console.log('that password is mad strong')
} else if(pass.length >= 8){
    console.log('that password is acceptable');
} else {
    console.log('password need to be 8 or more characters!');
}

