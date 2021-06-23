//var n=5
for(let row=1;row<=5;row++){
    var str=" "
    //for(let space=1;space<=5-1;space++){
        for(let space=5-row;space>=1;space--){
        str+="  "
        
    }
    for(let star=1;star<=row*2-1;star++){
        str+=" *"
    }
    console.log(str)
}  
//console.log("\n")