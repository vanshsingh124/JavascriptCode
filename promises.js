console.log("Welcome to CodeHistory")
//Promises
 
 function prom(com){
     console.log("Fetching data plaese wait for a second")
   
        return new Promise(function(resolve,reject) {
            setTimeout(() => {
            if(com){
            resolve("Well we have done!!!")
            }
            else{
                reject("Please try again")
            }
        
        
    }, 3000);
})
}
    
 prom(true).then((result)=> {
     console.log(result)
 }).catch((error)=> {
     console.log(error)
 })

// function prom(complete) {
//     return new Promise(function(resolve,reject){
//         if(complete===true){
//             resolve("I am successfull...")
//         }
//         else{
//             reject("I am failed")
//         }

//     })
    
// }
// prom(true).then((result)=>{
// console.log(result)
    
// }).catch((error)=>{
//     console.log(error)
// }

// )



