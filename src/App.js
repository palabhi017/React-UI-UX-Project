// import logo from './logo.svg';
// import './App.css';
import Carosule from './Components/Carosule';
import Drag from './Components/Drag';
import Rating from './Components/Rating';
import Stopwatch from './Components/Stopwatch';

function App() {



  return (
    <div className="App">
      <Stopwatch/>
     <Drag/>
     {/* <Carosule/> */}
     <Rating/>
    </div>
  );
}

export default App;
