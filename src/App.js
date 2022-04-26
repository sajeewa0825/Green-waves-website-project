import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './componet/Nav/Nav';
import Slide from './componet/Slide/Slide'
import Card from './componet/Card/Card';
import { useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import Event from './componet/Event/event'


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 5000)
  }, [])
  return (
    <div className='App' >
      {
        loading ?
          <div className='spiner'>
            <ClimbingBoxLoader color={'#36D7B7'} loading={loading}  size={150} />

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