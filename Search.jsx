
import TextField from '@mui/material/TextField';
import './search.css';
import Button from '@mui/material/Button';
import {useState} from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d55c87f876b87700317bbec0198d9f68";
    let [city,setCity]=useState(" ");
    let [error,setError]=useState(false);

    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        let jsonResponse=await response.json();

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
    }
    catch(error){
        throw error;
    }

};

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(error){
            setError(true);
        }
    };

    return(
        <div className="search">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" 
            value={city} onChange={handleChange} required/>
            <br></br> <br></br>      
            <Button variant="contained" type="submit">
            search
            </Button>
            {error && <p style={{color:"red"}}>No such place found</p>}
            </form>

        </div>
    );
}
