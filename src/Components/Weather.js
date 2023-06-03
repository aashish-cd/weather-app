import React, { useState, useEffect } from 'react';
const apiKey = 'c4ef747f7e3949cf89654946230306';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('provo');
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`
      );
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const currentWeather = weatherData?.current;
  const forecast = weatherData?.forecast?.forecastday;

  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container py-5 mx-auto'>
          <div className='flex flex-wrap md:text-left text-center order-first'>
            <div className='w-full px-4'>
              <div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
                <div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Enter Location'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <button
                  className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
                  onClick={() => fetchWeatherData()}
                >
                  Get Weather
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <div className=' flex justify-center items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
        </div>
      ) : (
        <div className='container mx-auto'>
          <div className='flex gap-10 '>
            <p>Location: {weatherData.location.name}</p>
            <p>Country: {weatherData.location.country}</p>
          </div>
          <div className='bg-blue-200 p-4 mb-4'>
            <h2 className='text-lg font-semibold'>Current Weather</h2>
            <div className='flex items-center'>
              <img
                src={currentWeather.condition.icon}
                alt={currentWeather.condition.text}
                className='w-10 h-10 mr-2'
              />
              <div>
                <p>{currentWeather.condition.text}</p>
                <p>{currentWeather.temp_c}°C</p>
              </div>
            </div>
          </div>
          <h2 className='text-lg font-semibold'>7-Day Forecast</h2>
          <div className='grid grid-cols-7 gap-4'>
            {forecast.map((day) => (
              <div key={day.date} className='bg-blue-200 p-4'>
                <p>{day.date}</p>
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                  className='w-8 h-8'
                />
                <p>{day.day.avgtemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
