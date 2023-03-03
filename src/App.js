import Main from "./components/Main";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./components/Homepage/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
