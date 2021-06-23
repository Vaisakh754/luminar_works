var product=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horleciks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10],
]
var cnt=0
for(let ele of product){
    if(ele[0]>=100)
    cnt++

}
console.log(cnt)

var cnt=0;
for(let ele of product){
    if(ele[3]>0)
    cnt++
    
}
console.log(cnt)

for(let pro of product){
if(pro[1]=="boost")

console.log(pro)
}
let result=true
for(let ele of product){
    if(ele[3]<10)
    result= false;
        break;
}
  console.log(result)

var max=0
for(let ele of product){
    if(ele[2]>max)
    max=ele[2]
   
}
    console.log(max)

var min=5;
for(let ele of product){
    if(ele[2]<min)
    min=ele[2]
}
console.log(min)




    
