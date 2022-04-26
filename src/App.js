import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './componet/Nav/Nav';
import Slide from './componet/Slide/Slide'
import Card from './componet/Card/Card';
import { useState, useEffect } from 'react'
import Event from './componet/Event/event'
import { Bars } from  'react-loader-spinner'


function App() {


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000)
  }, [])


  return (
    <div className='App' >
      {
        loading ?
          <div className='spiner'>
            <Bars heigth="100" width="2000" color="green" ariaLabel="loading-indicator" className="spiner" />
          </div>
          :
          <div>
            <Nav />
            <Slide />
            <Card />
            <Event/>
          </div>
      }
    </div>
  );
}

export default App;