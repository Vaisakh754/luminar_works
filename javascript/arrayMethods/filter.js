// var arr=[1,5,6,7,3,4]

// var evens=arr.filter(num=>num%2==0)//6,4
// console.log(evens)

var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"gpotatto",mrp:45,aval_qty:40},
    {code:1005,name:"gbananac",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]

//print all products whose mrp=50

var below_mrp=products.filter(item=>item.mrp<50)
console.log(below_mrp)

//print out of stock items
var aval=products.filter(item=>item.aval_qty==0)
console.log(aval)

//print products available in range 50 to 100
var range=products.filter(item=>item.mrp>50 & item.mrp<100)
console.log(range)

//print name sstating with P & T

var name=products.filter(item=>item.name[0]=='b')
console.log(name)
//if mrp>50 add off 5% and mrp<50 offer 0%