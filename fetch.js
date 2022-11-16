console.log("Welcome to CodeHistory")

//Fetch Api in Javascript 
// fetch("vs.txt")
// .then( function (response) {
//     return response.text()
// }).then( function (data) {
//     console.log(data)
// })
// .catch(function (error) {
//     console.log("Can't fetch data Sorry for this!!!!")
// })

//Save Data to the Server
document.getElementById('btn').addEventListener('click',function (e) {
    e.preventDefault()
    let obj = {
        Name:document.getElementById('nam'),
        Email:document.getElementById('ema'),
        Contact:document.getElementById('con'),
    }
    fetch('https://jsonplaceholder.typicode.com/todos/id:201',{
        method:'GET',
        body:JSON.stringify(obj),
        Headers:{
            'Content-type':'application/json',
        },
    })
    .then( function(response){
        return response.json()
    
    })
    .then( function (json) {
        console.log(json)
    }).catch( function (error) {
        console.log("404 NOT FOUND")
        
    }

    )

    
})

















