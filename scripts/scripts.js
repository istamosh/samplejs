// querying DOM
// for more simple selector, just inspect element
// then go to element tab, navigate a piece you want to select as selector
// then right click > copy selector

// choosing first occurence of paragraph tag in document
// querying occurence runs from the top to bottom in HTML
// then display the entire selected HTML snippet in console
const firstPtag = document.querySelector('p');
console.log(firstPtag);

// select the p tag by referring to the first occurence of error class
// don't forget the dot prefix (.) to determine it's a class name
const errorClass = document.querySelector('.error');
console.log(errorClass);

// selecting another error class w/o interrupting the above code
// you can't just simply selecting div because there is already another div above it
// then combine the two by using dot (.)
const secondError = document.querySelector('div.error');
console.log(secondError);

// pasting copy selector's inspect element feature
// selecting 6th element of list from warehouse content
const sixthElement = document.querySelector('body > ul > li:nth-child(6)');
console.log(sixthElement);

// grabbing entire p tags and displayed as Node List
// Node List can't use array methods
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// accessing second element of nodelist
console.log(paragraphs[1])

// cycle or iterate through paragraphs using foreach method
paragraphs.forEach(element => {
    console.log(element);
})

// grabbing entire error class in document (body)
const errors = document.querySelectorAll('.error');
console.log(errors)

// grabbing element by ID
const pageTitle = document.getElementById('page-title');
console.log(pageTitle)

// grabbing elements by class name
// without the needs of dot (.)
const errorClass2 = document.getElementsByClassName('error');
console.log(errorClass2)

// can use array accessor on HTMLCollection
// but can't use foreach method
console.log(errorClass2[0])

// get element by their tag name
const byTagName = document.getElementsByTagName('p');
console.log(byTagName);
// access one element
console.log(byTagName[1]);

// get inner text property from first P tag occurence
const textInsidePTag = document.querySelector('p');
console.log(textInsidePTag.innerText);
// you can also override the inner text into Uppercase
textInsidePTag.innerText = textInsidePTag.innerText.toUpperCase();
// also you can append at the end
textInsidePTag.innerText += ' istamosh is handsome hehe!';

// get and access all inner texts props from p tags
// and add sample text for each of it 
const textsInsidePTag = document.querySelectorAll('p');
textsInsidePTag.forEach(param => {
    param.innerText += '.';
    console.log(param.innerText)
});

// getting foreword class div inner HTML content
const foreword = document.querySelector('.foreword');
console.log(foreword.innerHTML);
// altering foreword texts with horizontal lines
foreword.innerHTML =
`       <hr>
        <pre>
this is sandbox page.
feel free to crop the snippets, most of the codes are placed individually for each purposes.
            
All thanks to Mr. Shaun, YT: TheNetNinja
        </pre>
        <hr>`;

// altering warehouse list with new list of cartridges
const rifleCartridge = ['.45-70 Govt', '.416 Barrett', '.50 Beowulf'];
const warehouseList = document.querySelector('.warehouse');
rifleCartridge.forEach(content => {
    warehouseList.innerHTML += `<li style="color: darkblue">${content}</li>`;
});

// fetch href attribute inline from anchor link
const someLink = document.querySelector('a');
console.log(someLink.getAttribute('href'));
// override google link to istamosh github page
someLink.setAttribute('href', 'https://github.com/istamosh');
someLink.innerText = 'My Github Page';

// getting class name from P tag
const lipsum = document.querySelector('.lipsum');
console.log(lipsum.getAttribute('class'));
// override attribute name and adding style
lipsum.setAttribute('lipsum', 'bottomLipsum');
lipsum.setAttribute('style', 'color: gray;');

// adding style (not override) h1 tag
// using setAttribute() will overrides it
// using CSSStyleDeclaration properties allows more style
const welcomeTitle = document.querySelector('h1');
// view all moddable properties
console.log(welcomeTitle.style);
// adding more title styles
const titleStyle = welcomeTitle.style;
titleStyle.margin = '50px';
titleStyle.color = 'dimgray';
titleStyle.fontSize = '40px';
titleStyle.marginBottom = '5px';

// adding/changing class component in DOM
// showing all possible DOMTokenList
const dummy = document.querySelector('.dummy');
console.log(dummy.classList);
// adding class name from css predefined classes
// if class name is "dummy", it will become "dummy fail"
// the pointer will be "div.dummy.fail"
dummy.classList.add('fail');
// removing fail
dummy.classList.remove('fail');
// adding success class
dummy.classList.add('success');

// ----- //
// self challenge: if p text contains error, add fail class, if not, add success class
const challenge = document.querySelectorAll('.selfChallenge > p');
challenge.forEach(element => {
    if (element.innerText.includes('error')){
        element.classList.add('fail');
    } else if (element.innerText.includes('success')) {
        element.classList.add('success');
    }
});

// innerText can be hidden by <span> tag,
// meaning it can bypass if checks like my code above
// to keep it strict we use textContent property
challenge.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('fail');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
})

// toggle on/off class name on title area
// copying from title selector on inspect element
const titleID = document.querySelector('#page-title');
titleID.classList.toggle('testclass');
// coding this again will remove said class
titleID.classList.toggle('testclass');