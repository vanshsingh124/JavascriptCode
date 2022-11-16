console.log("This is pracice code")
//AJAX
//  document.getElementById("demo").addEventListener("click",function (e) {
//      function loadDoc() {
//          let xhp = new XMLHttpRequest()
//          xhp.onreadystatechange= function() {
//              if(this.readyState==4 && this.status==200){
//                  document.getElementById("demo").innerHTML=this.responseText
    
//              }
//              else{
//                 document.getElementById("demo").innerHTML= document.write="404 NOT FOUND"
//              }
//          }
//          xhp.open("GET","a.txt",true)
//          xhp.send()
        
//      }
//      loadDoc()
//  })



// Fetch Api
// document.getElementById("btn").addEventListener("click",function (e) {
//     e.preventDefault()
//     let obj = {
//         Name: document.getElementById("nam").value,
//         Email: document.getElementById("ema").value,
//         Number: document.getElementById("no").value
//      }
//      fetch("https://dummy.restapiexample.com/api/v1/create",{
//          method:"post",
//          body:JSON.stringify(obj),
//          headers:{
//          'Content-Type': 'application/json'
//          },
         
//      })
//      .then(function (response) {
//          return response.JSON
//      }).then(function (data) {
//          console.log(data)
//      })
// })


//promises
// let a = true

    
//     function prome() {
        
//      return new Promise(function (resolve,reject) {
//        if (a==true){
           
//             return resolve(`Yeah!!! It's right because it is ${a}`)
//        }
//        else{
//            return reject(`Oh no!!! It's not right because it is ${a}`)
//        }
//     })}
    


// prome().then(
//     function (result) {
//         console.log(result)
//     }
// ).catch(
//     function (error) {
//         console.log(error)
//     }
// )


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//      Name: document.getElementById("nam").value,
//     Email: document.getElementById("ema").value,
//      Number: document.getElementById("no").value
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//Practice of promises
function prom(){
 
  
}




















