var low=21,upp=40;
//print all numbers between 21 to 40,21,22
for (let num=low;num<=upp;num++){//num=21
    let flag=0;
    //num=21
    for(let i=2;i<num;i++){//i=3
        if(num%i==0){//21%2==0 21%3==0
            flag++;//flag=1
            break;
        }
    }
    if(flag==0){//flag==0
        console.log(num);
    }
}

//var num=2
//low=8
//upp=26
//half pyramid
//full pyramid
//factorial of a number
//for loop break continue nested loop