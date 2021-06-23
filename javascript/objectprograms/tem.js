var temperature=[{district:"tvm",temperature:25},
{district:"kollam",temperature:27},
{district:"kottayam",temperature:24},
{district:"ekm",temperature:27},
{district:"tsr",temperature:25},
{district:"pkd",temperature:30},
{district:"tvm",temperature:27},
{district:"kollam",temperature:25},
{district:"kottayam",temperature:28},
{district:"ekm",temperature:29},
{district:"tsr",temperature:32},
{district:"pkd",temperature:31},]

var weather={}
var max=0
for(let data of temperature){
    let dist=data["district"]//tvm
    let temp=data["temperature"]//25
    if(dist in weather){
        let old_temp=weather[dist]
        if(old_temp<temp){
            weather[dist]=temp
        }
        
        if(data["temperature"]>max){
            max=data["temperature"]
            //if()
            
        }
        console.log(max)
       
    }
    else{
        weather[dist]=temp
    }
    
}
    console.log(weather)
    
    

    

//sort desc order by temp
//find dist with highest temp tsr
