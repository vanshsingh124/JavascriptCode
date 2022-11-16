console.log("Welcome to CodeHistory")
//Creating a Map 
let m = new Map()

//Adding values to Map using add method
let add = m.set("Apples",true)
let add2 = m.set("Add",function adding(a,b) {
    return a+b
})
//For getting value we use get() method 
console.log(add.get("Apples"))
console.log(add2.get("Add"))
//When we have to know the size of the Map() so then we can use this method 
console.log(add2.size)
//When we have to check that value is exist or not so then we can use this method 
// console.log(add2.has('Add'))
//When we delete any key or value pair so then we can use this method 
// console.log(add2.delete("Apples"))
//When we clear any key or value pair so then we can use this method 
// console.log(add2.clear())
// console.log(add2)
// console.log(add)

//Here we iterate over Map()
console.log("Here we iterate over Map()")
for (const [key,value] of add) {
    
    console.log([key,value])
}
//Here we iterate over keys of Map()
console.log("Here we iterate over keys of Map()")
for (const key of add.keys()) {
    
    console.log(key)
}

//Here we iterate over ke values Map()
console.log("Here we iterate over keys of Map()")
for (const key of add.values()) {
    
    console.log(key)
}
