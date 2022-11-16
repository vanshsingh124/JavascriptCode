console.log("Welcome to CodeHistory")

//Pretend it is server
let obj =[ {
    name:"Rohan",
    subject:"javascript"
}]
function enrollstudent(students,callback){
    setTimeout(function(){
        obj.push(students)
        console.log("Students have been enrolled")
        callback()
    }, 1000);
}

function getStudent(){
    setTimeout(function() {
        let str = ""
       obj.forEach (function(Students) {
          str += `<li>${obj.name}</li>` 
       });
       document.getElementById('keyna').innerHTML=str
       console.log("Students have been fethched")

    }, 3000);
}

let newst = {name:"mohan",subject:"Pyhton"}
enrollstudent(newst,getStudent)
// getStudent()













//If you are not getting any point in javascript so you can comment me so i will create a one query class video.