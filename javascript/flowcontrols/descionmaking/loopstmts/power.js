function exponentiate(base,power){ 
    let count=0;
    let result=1;
    if(power===0){
    return 1
    }
    while(count<power){
        result=result+base;
        count=count+1;
    }
    return result
    }
    console.log(exponentiate(1,3)+exponentiate(2,3)+exponentiate(3,3))
    
//console.log(1**3+2**3+3**3);