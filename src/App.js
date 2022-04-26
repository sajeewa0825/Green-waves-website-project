import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './componet/Nav/Nav';
import Slide from './componet/Slide/Slide'
import Event from './componet/Event/event'

function App() {
  return (
    <div>
        <Nav/>
      <Slide />
      <Event/>
    </div>
  );
}

export default App;
