//creating a editable div 

//Creating Element
let divelem = document.createElement('div')

//Add text to ceated element
let val = localStorage.getItem('text')
let text
if (text == null) {
    text = document.createTextNode('This is my element.Click to edit it')
}
else {
    text = document.createTextNode('val')
}
divelem.appendChild(text)

//Giving id and class to the div element
divelem.className = 'mydiv'
divelem.id = 'mydivc'
divelem.setAttribute('style','border:2px solid black;width:154px;margin:34px;padding:23px')

//Grab the main container
let container = document.querySelector('.container')
let id = document.getElementById('myfirst')

//Insert the element befoe element with id first
container.insertBefore(divelem, id)
console.log(divelem, container, id)

// add event listener to the divElem
divelem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = mydivc.innerHTML;
    divelem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        mydivc.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

