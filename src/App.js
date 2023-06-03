import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <img
          className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
          alt='hero'
          src='https://media.istockphoto.com/id/1270504858/photo/lightning-during-summer-storm.jpg?b=1&s=612x612&w=0&k=20&c=k8f_Ov9mjlbt3G8DPMZKVOdwZ9DgU0fbSCszwPYv7NA='
        />
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Welcome to our weather forecasting website, your reliable source for
            accurate and up-to-date weather information.
          </h1>
          <p className='mb-8 leading-relaxed'>
            Get precise forecasts, interactive radar maps, and specialized
            weather reports tailored to your needs, helping you stay informed
            and prepared for any weather condition. Our weather forecasting
            website provides accurate and up-to-date weather information with
            precise forecasts, interactive radar maps, and specialized reports.
            Stay informed and prepared for any weather condition with our
            reliable source of information.
          </p>
          <div className='flex justify-center'>
            <a href='/weather'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                See Weather
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
