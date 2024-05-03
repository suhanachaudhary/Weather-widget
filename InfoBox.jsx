import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ Info }){

    const INIT_URL="https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZSUyMGltYWdlfGVufDB8fDB8fHww";

    const HOT_URL="https://media.istockphoto.com/id/1493979980/photo/stylish-woman-and-the-sights-of-the-wadi-rum.webp?s=170667a&w=0&k=20&c=c4soesAKF5BDTPAdkwN2QeZ3PH8uSavvZcHWMC0jD1I=";

    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAINY_URL="https://media.istockphoto.com/id/1066533618/photo/adorable-little-boy-playing-at-rainy-day.webp?b=1&s=170667a&w=0&k=20&c=tQU9N67mSH3E1w_sqwxcnLIQH4Q8SLHd8V-TJbRVPFY=";
    return(
        <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 
          ? RAINY_URL 
          :Info.temp >15 
          ? HOT_URL
          : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city} {
          Info.humidity > 80 
          ? <ThunderstormIcon/>
          :Info.temp >15 
          ? 
          <WbSunnyIcon/>
          :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>Temperature={Info.temp}&deg;C</p>
            <p>Humidity={Info.humidity}</p>
            <p>Min Temp={Info.tempMin}&deg;C</p>
            <p>Max Temp={Info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{Info.weather}</i> and feels like {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    )
}