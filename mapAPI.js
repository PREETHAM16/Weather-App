const request=require('request');
const map=(city,callback)=>{
    console.log('geocode');
geocodeurl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoicHJlZXRoYW0tcmVkZHkxNiIsImEiOiJja2xycWp4OTUxcGQ4MnVuM2l3em5vcDFpIn0.vj5keomBqTo3Uc0SjXnasQ&limit=1`
request({url:geocodeurl,json:true},(error,response)=>{
    if(error)callback('Unable to connect to geocoding API');
    else if(response.body.features.length===0)callback('Unable to find location find another search');
    else{
    callback(undefined,response.body.features[0].center);    
    }

});
}

module.exports=map;