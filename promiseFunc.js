let prom1 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("It is resolved1")
    }, 1000);
    
})
    

let prom2 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("It is resolved2")
    }, 2000);
    
})
    

let prom3 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        // resolve("It is resolved")
        reject("Some error occured")
    }, 3000);
    
})
    

// let all = Promise.all([prom1,prom2,prom3]) //It shows the value when all promise will fullfield.
// let all = Promise.allSettled([prom1,prom2,prom3]) //It shows the status and reasons of the promise.
// let all = Promise.race([prom1,prom2,prom3]) //It shows the value which resolve first.
let all = Promise.any([prom1,prom2,prom3])  //

all.then(function (value) {
    console.log(value)
    
}).catch(function (err) {
    console.log("Sorry some error occured")
})

