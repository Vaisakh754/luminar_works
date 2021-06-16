var num1=50,num2=40,num3=20;
var low,mid,hi;
if(num1>num2){
    mid=num1;
    low=num2;
}
else{
    mid=num2;
    low=num1;
}
if(mid>num3){
    hi=mid;
    if(low>num3){
        mid=low;
        low=num3;
    }
    else{
        mid=num3;
    }
}else hi=num3;
console.log("lowest",low);
console.log("middle",mid);
console.log("highest",hi);