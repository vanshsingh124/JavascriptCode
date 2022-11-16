//If else conditions

const age = 12
const doyoudrive = true
if (age > 18 && doyoudrive) {
    console.log("Yes you can drive")
} else {
    console.log("You cannot drive")
}

const no = 1234
const on = 678
const mn = 98
if (no > mn && no > on) {
    console.log("no is the greater one")
}
else if (on > no && on > mn) {
    console.log("on is the greater one")
}
else {
    console.log("mn is the greater")
}


//Switch Statement
const yi = 2
switch (yi) {
    case 1:
        console.log("I became a ML")
        break
    case 2:
        console.log("I became a web developer")
        break
    case 3:
        console.log("I became a android developer")
        break
    default:
        console.log("There is no matching")
}

//Tenary Operator
var animal = "kitty"
console.log(animal === "kitty" ? "cute" : "still nice")

var num = 6
var mun = 5
console.log(num > mun ? "num is greater" : "mun is greater")



