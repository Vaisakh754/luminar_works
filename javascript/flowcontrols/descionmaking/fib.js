var num1=0,num2=1;
var sum=0;
console.log(num1,"\n",num2)
while(sum<21){
sum=num1+num2
num1=num2;
num2=sum
console.log(sum)
}
