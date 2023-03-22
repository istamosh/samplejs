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