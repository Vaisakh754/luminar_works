var num=123;
var num1=num;
var res=0;
 while(num!=0){
     let digit=num%10;
     res=res*digit;
     num=Math.floor(num/10);
    
 }
 if(num1!==res){
     console.log("palindrome");
 }
else{
    console.log("not palindrome");
}
//console.log(num1==res?"palindrome":"not palindrome")