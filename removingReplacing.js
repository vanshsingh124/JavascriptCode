//removing & Replacing and Creating Elements
//createElement
let para = document.createElement("li")
let rg =document.createTextNode('I am a text node')
//Add a class name to the li element 
para.className='childul'
para.id="hii"
//appendingElement
let ul = document.querySelector('ul.unordered')
ul.appendChild(para)
para.appendChild(rg)//hello world


//for Practice
let elem1 = document.createElement('p')
let yhn = document.getElementById('jk')
let kl = document.createTextNode("this is paragraph")
elem1.className="pro"
elem1.id="gamer"
jk.appendChild(elem1)
//Git hub changes are there and it is for github practical
elem1.appendChild(kl)


//replaceWith
let elem2 = document.createElement('h1')
let jn = document.getElementById('no')
let vb = document.createTextNode("this is heading1")
elem2.className="cloud"
elem2.id="data"
elem2.appendChild(vb)
jn.replaceWith(elem2)

//settingAttribute
let klm = document.createElement('a')
let rgh = document.querySelector('.container')
let lkm = document.createTextNode("Go to this website")
klm.className="i am"
klm.id="am"
klm.setAttribute('href','www.wikipedia.com')
klm.appendChild(lkm)
rgh.appendChild(klm)
console.log(klm)

let iop = document.getElementsByClassName('i am')
console.log(iop)

//getAttribute
let h =document.querySelector('#am').getAttribute('href')
console.log(h)

//removeAttribute
// let olm = document.getElementById('am').removeAttribute('href')         
// let fg = document.getElementById('am')

//replaceWith
let mh = document.createTextNode('This is replace1')
let rf = document.querySelector('.list1').replaceWith(mh)

//replaceChild
let yui = document.createTextNode('This is replace2')
let kk = document.getElementById('jk')
kk.replaceChild(yui,document.getElementById('gui'))

//removechildNode
let ryu = document.getElementById('jk')
if(ryu.hasChildNodes()){
ryu.removeChild(ryu.childNodes[2])
}
//Only for check
let gr = document.getElementById('jk')
let fd=gr.childNodes
console.log(fd)























