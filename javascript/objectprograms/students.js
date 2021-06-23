var product={
    item_code:1000,
    mrp:30000,
    name:"f14",
    in_stock:15
}

console.log(product.name)
//update of mrp 2000
product.mrp-=2000
console.log(product.mrp)

//chk offer is present if not  add offer 20%
if(!("offer" in product)){
    product.offer="25%"
}
console.log(product)

 product.in_stock=25;
console.log(product)