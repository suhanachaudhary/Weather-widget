import Search from './Search.jsx';
import InfoBox from './InfoBox.jsx'
import {useState} from 'react'

export default function(){
    let [WeatherInfo,setWeatherInfo]=useState({
        city:"Mumbai",
        feelsLike:25,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather Widget App</h2>
            <Search updateInfo={updateInfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
    )
}