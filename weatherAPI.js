const request=require('request');

function forecast(city,callback){
    console.log('weatherAPI');
url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=751c32f04649b15414708b83b3ebc057&units=metric';
request({url:url,json:true},(error,response)=>{
    if(error){
        callback('Unable to connect to open weather API');
    }else if(response.body.error){
        callback('Unable to find the location');
    }else{
    const wr=response.body;        
    callback(undefined,wr)
    }
});    
}


module.exports=forecast;