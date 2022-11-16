//Parent & Traversing the DOM
//Traversing the Downwards

let sd = document.querySelector('h1')
console.log(sd)

//Children
let fg = document.querySelector('.unordered')
let ry = fg.children
console.log(ry)


//ChildNodes
let gh = document.querySelector('.unordered')
let rt = gh.childNodes
rt = gh.childNodes
console.log(rt)

//hasChildNodes
let ds = document.querySelector('.unordered')
let nap = ds.hasChildNodes()
console.log(nap)

//hasAttribute
let rgh = document.querySelector('.no')
let yui = rgh.hasAttribute('href')
console.log(yui)

//lastElementChild and firstElementChild
const plm = document.querySelector('.unordered')
const ghj = plm.lastElementChild
console.log(ghj)


//nth-child Term
const p = document.querySelectorAll('.list1')
const g = p[0]
console.log(g)

//parentElement
let ryu = document.querySelectorAll('ul')
let upo = ryu[0]
let pkl = upo.parentElement
console.log(pkl)

//nextElementSibling
const uyt = document.querySelector('nav')
const lmj = uyt.nextElementSibling
console.log(lmj)

////previousElementSibling
let jhg = document.querySelectorAll('li')[3]
let mn = jhg.previousElementSibling
console.log(jhg)

//anotherWorks
let yuio = document.querySelector('.container')
console.log(yuio.children[0].children[0])
console.log(yuio.children[0].childElementCount)












