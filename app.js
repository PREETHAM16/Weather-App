const express=require('express');
const hbs=require('hbs');
const app=express();

const geocode=require('./mapAPI.js');
const forecast=require('./weatherAPI.js');

app.set('view engine','hbs');
app.use(express.static('./public'));
hbs.registerPartials('./public/partials');
app.get('/weather',(req,res)=>{
    const city=req.query.city;
    if(city){
          forecast(city,(error,weather)=>{
        if(error)console.log('Error',error);
        else{
            console.log('DATA',weather);
            geocode(city,(error,map)=>{
                if(error)console.log('Error',error);
                console.log('MAPPPPPPPPPPPPP',map);
const weather1={'temperature':weather.main.temp,'maxtemp':weather.main.temp_max,'name':weather.name,'mintemp':weather.main.temp_min,'pressure':weather.main.pressure,'humidity':weather.main.humidity,'windSpeed':weather.wind.speed}
                console.log(weather1);
                res.render('weather',{n:weather1,longi:map});
            });
        }
    });  
    }
    else
    res.render('weather');
});

app.get('/map',(req,res)=>{
res.render('map');
});

    
    app.listen(1000,()=>{
        console.log('Listening at port number 1000');
    });

//console.log(process.argv);