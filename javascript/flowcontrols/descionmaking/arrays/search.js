var arr=[10,11,12,13,14,15]
flag=0
var element=14;
for(let num of arr){
    if(element==num){
        
        flag++
        break;
    }
    }
    if(flag==0){
        console.log("element not found")
    }
    else{
        console.log("element found")
    }
