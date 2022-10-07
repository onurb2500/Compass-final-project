import React, { useState } from "react";
import icon_weather from "../../assets/006-cloudy.svg"

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
                `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dd4879fa7a562c9d85fab97d4208cde&units=metric`
            );
            const data = await api_call.json();
            this.setState({
            lat: lat,
            lon: lon,
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
              <div style={{marginTop: "15px"}}>
                <p style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "18px",
                  color: "#222222"
                }}>{city} - SC</p>
                <div style={{
                  display: "flex",
                  justifyContent:"space-between",
                  width: "120px"
                }}>
                  <img src={icon_weather}></img>
                  <h2 style={{
                    fontWeight: "700",
                    fontSize: "48px",
                    lineHeight: "61px",
                    color: "#222222"
                  }}>{temperatureC}°</h2>
                </div>
              </div>
            );
          } else {
            this.getWeather(51.5072,0.1276)
            const { city, temperatureC } = this.state;
            return <div style={{marginTop: "15px"}}>
            <p style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "18px",
              color: "#222222"
            }}>{city} - LDN</p>
            <div style={{
              display: "flex",
              justifyContent:"space-between",
              width: "120px"
            }}>
              <img src={icon_weather}></img>
              <h2 style={{
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "61px",
                color: "#222222"
              }}>{temperatureC}°</h2>
            </div>
          </div>;
          }
        }
      }
      export default Geoloc;
