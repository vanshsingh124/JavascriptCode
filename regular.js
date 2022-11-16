console.log("Here is source code of Regular Expression by CodeHistory")
//Regular Expressions 
// Functions of Regular Expression 
// let re = /vansh/ // This is regular expression 
// re = /vansh/g //g means global
// re = /vansh/i //i means case insensitive

// let s = "vansh is very good and vansh is a good programmer also"
// Functions of regular expession 
// 1. exec() The function will return an array or null for no match
// let result = re.exec(s)
// result = re.exec(s)
// console.log(result)

// 2. test() - Return true or false
// let result2 = re.test(s)
// console.log(result2)

// 3. match() - It will return an array of results or null
// let result3 = s.match(re)
// console.log(result3)

// 4. search() - Returns index of first  match else it will return -1
// let result4 = s.search(re)
// console.log(result4)

// 5. replace() - Returns new replaced string with all replacements (if no match is given, first match  wil be replaced)
// let result5 = s.replace(re,'SHUBHAM')
// console.log(result5)


//Metacharacters in Regular Expression
// let regax = /^vanshsingh/    // ^ means expression will match if string starts with 
// regax = /vanshsingh$/        // $ Means expression matches if string ends with     
// regax = /v*nshsingh/        // * Matches any 0 or more character
// regax = /v.nshsingh/        // . Matches any one character 
// regax = /va?nshsin?gh/      // ? after character means thar character is optional
// regax = /vansh\*singh/      // \ Means that the character is Regular Expression not Metacharacters  



// let str= "vansh*singh"

// let result = regax.exec(str)
// console.log(`The result from exec is ${result}`)



// if(regax.test(str)){
//     console.log(`The string ${str} matches the expression ${regax.source}`)
// }
// else{
//     console.log(`The string ${str} does not matches the expression ${regax.source}`)
// }


// Character Sets - []
// let regax = /v[a-z]nshsingh/                // Can be any character from a to z 
// regax = /v[aty]nshsingh/                    //Can be a t or y
// regax = /v[^s u i]nshsingh/                 //Can not be any of s u or i
// regax = /v[a y u]nshs[^ o u r]ngh/          //Can be a y u + cannot be o u r


// let str = "vanshsingh"




// let result = regax.exec(str)
// console.log(`The result from exec is ${result}`)

// if (regax.test(str)) {
//     console.log(`The string ${str} matches the expression ${regax.source}`)
// }
// else {
//     console.log(`The string ${str} does not matches the expression ${regax.source}`)
// }


//Quantfiers 
// let regax = /vans{2}hsingh/  // s can occur 2 times
// regax = /vans{0,2}hsingh/   //s can occur 0 or 1 or 2 times



// let str = "vanshsingh"

// let result = regax.exec(str)
// console.log(`The result from exec is ${result}`)

// if (regax.test(str)) {
//     console.log(`The string ${str} matches the expression ${regax.source}`)
// }
// else {
//     console.log(`The string ${str} does not matches the expression ${regax.source}`)
// }


// Character Classes
// let regax = /\w+/
// regax =     /\W/
// regax = /\W+/
// regax = /\d/
// regax = /\d+/
// regax = /\D/
// regax = /\D+/
// regax = /\s/
// regax = /\s+/
// regax = /\S/
// regax = /\S+/
// regax = /\bvbvanshsingh/
// regax = /\B3244rd1r/
// regax = /\n/
// regax = /\t /




// let str = `vbvanshsingh3244rd1r`





// let result = regax.exec(str)
// console.log(`The result from exec is ${result}`)

// if (regax.test(str)) {
//     console.log(`The string ${str} matches the expression ${regax.source}`)
// }
// else {
//     console.log(`The string ${str} does not matches the expression ${regax.source}`)
// }


