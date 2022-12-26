import React, { useState } from 'react'
import axios from 'axios'
import './Style.css'

function App() {
  const [data, setData] = useState({})
  const [place, setPlace] = useState('')
  const [First, setFirst] = useState(null)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place},356&units=imperial&appid=4b985629fce1e938a49a89952c2897c2`

  const searchLocation = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
        console.log(response)
      })
      .catch((err) => alert('check the location name'))
    setPlace('')
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={place}
          onChange={(event) => setPlace(event.target.value)}
          placeholder='Enter Location'
          type='text'
        />
        <button onClick={searchLocation} className='sub'>
          submit
        </button>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='place'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className='bottom'>
            <div className='feels'>
              {data.main ? (
                <p className='bold'>{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? (
                <p className='bold'>{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
