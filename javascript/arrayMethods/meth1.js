//map(),filters(),reduce(),sort(),find(),some(),forEach()
//=>arrow functions
// function sub(num1,num2){ 
//     return num1-num2
// 

// let add=(num1,num2)=>num1+num2
// let sub=(num1,num2)=>num1-num2
// let cube=num=>num**3
// console.log(add(10,20))
// console.log(sub(60,29))
// console.log(cube(3))

// //create arrow for return odd or even

// var numcheck=num=>num%2==0?"even":"odd"
// console.log(numcheck(4))

//map()
var arr=[1,5,6,7,3,4]
//no condition map can apply

//if condition comes map() cannot apply,So
//we use filter() function.

var squares=arr.map(num=>num**2)
console.log(squares)

var cubes=arr.map(num=>num**3)
console.log(cubes)
