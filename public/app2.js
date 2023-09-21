// Learning DOM
let person = {
    name: "Jane",
    age: 27,
    city: "Kigali",
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

if ('name' in person) console.log('name in person');

const names = ['Ada', 'Kira', 'Jane']
for (let name of names) {
    console.log(name);
}

const newParagraph = document.createElement('p');
newParagraph.setAttribute('id', 'about-js')
newParagraph.innerText = 'JavaScript is a dynamically typed language';
document.getElementById('dom-definition').appendChild(newParagraph);

let newHeading = document.createElement('h1');
newHeading.innerText = 'This is an H1 element';
document.querySelector('.container-2').insertBefore(newHeading, document.getElementById('dom-definition'));
// console.log(newHeading);

let newDiv = document.createElement('div');
let newP = document.createElement('p');
newP.setAttribute('id', 'dom-example-2');
newP.innerText = 'Working with the DOM is awesome!'
newDiv.appendChild(newP);
document.querySelector('.container-2').appendChild(newDiv);

document.querySelector('.container-2').replaceChild(newDiv, document.querySelector('#dom-example'));

// insertAdjacentHTML
document.querySelector('#dom-definition').insertAdjacentHTML('beforebegin', '<p>Before Begin</p>')
document.querySelector('#dom-definition').insertAdjacentHTML('afterbegin', '<p>After Begin</p>')
document.querySelector('#dom-definition').insertAdjacentHTML('beforeend', '<p>Before End</p>')
document.querySelector('#dom-definition').insertAdjacentHTML('afterend', '<p>After End</p>')

// insertAdjacentElement
const demo = document.createElement('h1');
demo.innerText = "An H1 tag for visual purpose";

document.querySelector(".container-2").insertAdjacentElement('afterend', demo);

// textNode
let textNode = document.createTextNode('Learning DOM is highly essential for web dev')

document.querySelector("#dom-definition").appendChild(textNode);
document.querySelector('.container-2').removeChild(document.querySelector('div.paragraph'));

// Traversing the dom
const pNode = document.querySelector('#dom-definition-3').parentNode;
console.log(pNode);
const childNode = document.querySelector('#dom-intro');
console.log(childNode.childNodes);
console.log(childNode.children);