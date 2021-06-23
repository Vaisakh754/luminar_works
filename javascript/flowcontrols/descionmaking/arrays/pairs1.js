// var arr=[1,2,3,4];

// var element=6;
// for(let num1 of arr){
//     for( let num2 of arr){
//         let total=num1+num2;
//         if(element==total & num1!=num2){
//             console.log("pairs",num1,num2)
//         }
//     }
// }

//method=2
var arr=[1,2,3,4];

var element=6;
var count=1;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        let total=arr[i]+arr[j];

        if(element==total){
            console.log("pairs",arr[i],arr[j])
        }
        count++;
    }
}
console.log(count)

method-3
