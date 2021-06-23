var arr=[4,5,3];
var sum=0
for(let num of arr){
    sum=sum+num;
}
console.log(sum)

var op=[];
for(let num of arr){
    var res=sum-num;
    op.push(res);
}
console.log(op)