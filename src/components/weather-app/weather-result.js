import React from 'react';

// eslint-disable-next-line react/prop-types
const WeatherResult = ({ data }) => {
  if (!data.city) {
    return null;
  }
  const recentDataObj = data.list[0];
  const recentData = (
    <div>
      <p className="w_date">
        {
          recentDataObj.dt_txt.split(' ')[0]
        }
        ,
        <i>
          Last updated:
          {
            recentDataObj.dt_txt.split(' ')[1]
          }
        </i>
      </p>
      <p className="w_min_max">
        Min:
        {
          recentDataObj.main.temp_min
        }
        <sup> °C </sup>
        | Max:
        {
          recentDataObj.main.temp_max
        }
        <sup>°C</sup>
      </p>
      <p className="w_current">
        {
          recentDataObj.main.temp
        }
        <sup>°C</sup>
      </p>
    </div>
  );

  return (
    <div className="weather-result">
      <h2>
        {
          data.city.name
        }
        ,
        {
          data.city.country
        }
      </h2>
      {recentData}
    </div>
  );
};

export default WeatherResult;
