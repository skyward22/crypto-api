import "./App.css";
import Coin from "./components/Coin";
import {Link, Route, Routes} from 'react-router-dom'
import Bitcoin from "./components/Bitcoin"
import Ethereum from "./components/Ethereum"
import Home from "./components/Home"

function App() {

  return (
    <div className="App">
     
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bitcoin' element={<Bitcoin/>}/>
            <Route path='/ethereum' element={<Ethereum/>}/>
          </Routes>
      
    </div>
  );
}

export default App;