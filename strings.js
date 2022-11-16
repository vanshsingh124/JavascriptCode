//Strings

let nu = "Hello welcome to strings"
console.log(nu)

//Concantenating Strings
const kl = "foo"
const lk = "bar"
console.log(kl+lk)

//Converting
let jk = (45767).toString()
console.log(jk)
let io = String(4688)
console.log(io)
console.log(String.fromCharCode(104,101,108,108,111))


//String Templates
var gt = `hello"I am vansh //singh""What are //you doing i am very well dood"`
console.log(gt)

const hy = "World"
const yh = `Hello ${hy}`
console.log(yh)

//Reverse String
function reverse(str){
     return[...String(str)].reverse().join('')
}
console.log(reverse('StackOverFlow')) 

//Compare Strings
const er = "hello"
const re = "world"
console.log(er.localeCompare(re))

//Sorting 
const yup = ["Banana","Apple","Orange"]
yup.sort(function(a,b){
    return a.localeCompare(b)
})
console.log(yup)

//Accessing Character
var string = ("Hello World")
console.log(string[6])

//Trim whitespace
const lp = ("     hello      ");
console.log(lp.trimStart())

//Splitting into an Array
var ad = "one, two, three, four"
console.log(ad.split(" ,"))

//Detecting a String
var we = "my string"
var ew = 5
console.log(typeof ew === "string")

//Slicing with Strings
var s = "0135484wnhihs"
console.log(s.slice(1,8))

//Find and Replace
var yuio = "Hello World"
console.log(yuio.indexOf("o"))
console.log(yuio.lastIndexOf("W"))
console.log(yuio.includes("o"))
console.log(yuio.replace("Hello","Hii"))

//UpperCase and LowerCase
const opl ="How Are You Man"
console.log(opl.toUpperCase())
console.log(opl.toLowerCase())

//Repeat Strings 
const asd = "bye"
console.log(asd.repeat(4))









