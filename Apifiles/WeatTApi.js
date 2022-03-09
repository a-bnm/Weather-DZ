const cle="36dd113d6e8f0d7aa8d0f04189b5192f";

export function getWeatherOfCity(nom){
 const url='https://api.openweathermap.org/data/2.5/weather?q='+nom+'&appid='+cle+'&lang=fr&units=metric'
  return fetch(url).then((reponse)=> reponse.json()).catch((erreur)=> console.error(erreur))
}

export function getIconTemp(code){
return ('https://openweathermap.org/img/w/'+code+'.png')
}

export function getDailyForecastWeather(latitude,longitude){
  const url='https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid='+cle+'&units=metric&lang=fr';
  return fetch(url).then((reponse)=> reponse.json()).catch((erreur)=> console.error(erreur))
}
