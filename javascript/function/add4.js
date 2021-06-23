// function add(...args){
//     console.log(args);
// }
// //add(10,20)

// add(10,20,30)
// add(10,20,30,40)

// function add(...args){
//     let total=0;
//     for(let num of args){
//         total+=num
//     }
//     return total;
// }
// console.log(add(10,20,30,40))

var arr1=[10,20,30,40]

var arr2=[10,11,12,20]
//common elements of these 2 arrays
//flag=0;
// for(let num1 of arr1){
//     for(let num2 of arr2){
    for(i=0;i<arr1.length;i++){
        // for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[i]){ 
            return false
        }
        return true
    }
    console.log(arr1[i])
