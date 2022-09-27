import React from "react";


    class Geoloc extends React.Component {
        API_KEY = "6dd4879fa7a562c9d85fab97d4208cde";
        state = {
            lat: undefined,
            lon: undefined,
            city: undefined,
            state: undefined,
            temperatureC: undefined,
            temperatureF: undefined,
            errorMessage: undefined,
        };
        getPosition = () => {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        };
        getWeather = async (lat:number, lon:number) => {
            const api_call = await fetch(
                `//api.openweathermap.org/data/2.5/weather?lat=${-27.644226825052517}&lon=${-48.674035055112796}&appid="6dd4879fa7a562c9d85fab97d4208cde"&units=metric`
            );
            const data = await api_call.json();
            this.setState({
            lat: -27.644226825052517,
            lon: -48.674035055112796,
            city: data.name,
            state: data.name,
            temperatureC: Math.round(data.main.temp),
            temperatureF: Math.round(data.main.temp * 1.8 + 32),
            icon: data.weather[0].icon,
            // sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
            // sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
          });
        };
        componentDidMount() {
          this.getPosition()
            .then((position:any) => {
              this.getWeather(position.coords.latitude, position.coords.longitude);
            })
            .catch((err) => {
              this.setState({ errorMessage: err.message });
            });
        }
        render() {
          const { city, temperatureC } = this.state;
          if (city) {
            return (
              <div>
                <p>{city} - SC</p>
                <h2>{temperatureC}°</h2>
              </div>
            );
          } else {
            return <span>Loading...</span>;
          }
        }
      }
      export default Geoloc;