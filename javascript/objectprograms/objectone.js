//object-{}
//property:value,key:value
//prop/keys=> jan feb march april may
//values are fetch by using corresponding key or property


var exp={jan:10000,feb:15000,march:22000,april:23000,may:20000}
//either exp[property/key] or expens.property/key
//console.log(exp["march"])
console.log(exp.may)
//adding new key and value
exp.june=25000
console.log(exp)

// exp["june"]=25000
// console.log(exp)

exp.march+=3000
console.log(exp)

//check an element is present or not.
console.log("july" in exp);

if("july" in exp){

}
else{
    exp.july=27000
}
console.log(exp)
