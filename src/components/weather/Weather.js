import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment/moment';

const Weather = ({weatherData}) => {
  return (
   
    <>
        <div>Weather</div>
        <Card>
            <Card.Content>
                <Card.Header className="header">Địa chỉ: {weatherData.name}</Card.Header>
                <p>Nhiệt độ hiện tại: {weatherData.main.temp} &deg;C</p>
                <p>Thời gian mặt trời mọc: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Thời gian mặt trời lặn: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Trạng thái thời tiết: {weatherData.weather[0].main}</p>
                <p>Độ ẩm: {weatherData.main.humidity} %</p>
                <p>{moment().format('dddd')}</p>
                <p>Ngày: {moment().format('LL')}</p>
            </Card.Content>
        </Card>
    </>
  )
}

export default Weather;