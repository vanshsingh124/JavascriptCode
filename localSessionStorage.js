//localStorage

//creatingEntires
let my = 'name'
localStorage.setItem(my,"ram")


//readingEntires
let fg = localStorage.getItem(my)
console.log(fg)

//updatingEntries
let io = "job"
let ym = localStorage.setItem(io,"softwareEnginner")
console.log(ym)

//deletingEntries
let kl = localStorage.removeItem(my)
console.log(kl)

//clearingEverything
// let po = localStorage.clear()
// console.log(po)

//createItem
let myobj = {name:'vansh',class:'8th',rolNo:'14',language:'javascript'}
localStorage.setItem(my,JSON.stringify(myobj))
//readItem
let item = JSON.parse(localStorage.getItem(my))
console.log(item)

//sessionStorage
//Like localStorage same thing goes for sessionStorage




