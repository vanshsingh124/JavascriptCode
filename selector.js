//Element Selector in Js
//It Selects the Element By Id
let yi = document.getElementById('demo')
yi.style.color="red"
yi.className
yi.childNodes
yi.innerText="Hello World"
yi.innerHTML="<i>Hello World and I am Proud of You</i>"
console.log(yi)

//Iteration of Element Selector
for(let y=0;y<yi.length;y++){
    let r = yi[y]
    console.log(r)
}
//It Selects the Eelment By Tag Name
let pl = document.getElementsByTagName('div')
console.log(pl)

//It Selects the Eelment By Class Name
let gh = document.getElementsByClassName('list')
console.log(gh)

//It Selects the Eelment By Id
let mno = document.getElementById('lk')
console.log(mno)