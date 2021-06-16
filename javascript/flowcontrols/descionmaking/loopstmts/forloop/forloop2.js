//chk given number is prime or not
var num=8
var flag=0;
for(i=2;i<num;i++){
    if(num%i==0){
       flag++;
       break;
    }
   
    }
console.log(flag==0?"prime":"not prime");