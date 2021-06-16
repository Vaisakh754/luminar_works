var age=true|false,health_issue=true|false;
var age=18;
if(age>65){
    console.log("eligible for vaccination");
}
else if((age>=18&&age<=65)&&(health_issue=false)){
    console.log("eligiblee for vaccination");
}
else {
    console.log("not eligible for vacination");
}