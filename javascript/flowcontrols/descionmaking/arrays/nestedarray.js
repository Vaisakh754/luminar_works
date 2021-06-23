var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1004,"nikil","mrkt",30000,2],
]

// for(let employee of employees){
//     console.log(employee[1])
// }
// for(let employee of employees){
//     console.log(employee[3])
// }
// for(let employee of employees){
//     if(employee[2]=="developer")
//     console.log(employee)
// }

for(emp of employees){
    if(emp[3]<22000)
    console.log(emp)
}


