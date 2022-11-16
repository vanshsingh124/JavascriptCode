console.log("This is our ajax course")
let but = document.getElementById('btn')
but.addEventListener('click',clicktobtn)
function clicktobtn(){
    console.log("You have clicked btn")
//Initialize the HMLHTTPRequest
    const xm = new XMLHttpRequest()

//Open the object
xm.open('GET','vs.txt',true)
let rk = document.getElementById("lif")
//What to do when response is ready for 
xm.onload = function () {
    if(this.status === 200){
        let obj =JSON.stringify(this.responseText);
        console.log(obj);
    }
    //Hello guys this I have written for the practical of github
}
xm.send();
console.log("We are done")
}

