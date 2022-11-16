//Element Selector in Js
let yi = document.getElementById('demo')
yi.style.color="red"
yi.className
yi.childNodes
yi.innerText="Hello World"
yi.innerHTML="<i>Hello World and I am Proud of You</i>"
console.log(yi)

let ip = document.getElementById('jk')
 ip.style.color="aqua"
 

console.log(ip)

for(let y=0;y<ip.length;y++){
    let r = ip[y]
    console.log(r)
}

let pl = document.getElementsByTagName('div')
console.log(pl)

let gh = document.getElementsByClassName('list')
console.log(gh)






