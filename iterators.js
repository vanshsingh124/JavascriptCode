console.log("Welcome to CodeHistory")
//Iterators in javascript 

//Using function of iterator
// let str = [1,2,3,4,5]
// let iter = str[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// Home-made functions of iterators
let str = [1,2,3,4,5]
function iterator(arr) {
    let index = 0 
    //We will return an object 
    return{
        next:function(){
            if (index<arr.length){
                //We will return below objet
                return{
                    value : arr[index++],
                    done : false
                }
            }
            else{
                return{
                done : true 
            }
        }
        }
    }
}
let iter = iterator(str)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())