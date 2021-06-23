var arr=[7,8,9,10,11,12]
flag=0;
var element=13;
var low=0,upp=arr.length-1;
while(low<=upp){
    var mid=Math.floor((low+upp)/2)
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;
    }
}
    console.log(flag==0?"not found":"found")
