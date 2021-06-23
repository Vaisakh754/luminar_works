var arr="ABAC"

// var duplicate=[]

// var arr=[10,7,11,8,12,9]
// arr.sort((num1,num2)=>num1-num2)
// //arr.sort((num1,num2)=>num1<num2?-1:1)
// console.log(arr);
var dict={}
for(let char of arr){
    if(char in arr){
        console.log("recursive character",char)
        break;
    }
    else{
        dict[char]=1
    }
}