
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./components/ContactPage/Contact";
import Honeymoon from "./Pages/Honeymoon";
import Family from "./Pages/Family";
import Holiday from "./Pages/Holiday";
import HoneymoonDetails from './Pages/HoneymoonDetails';
import FamilyDetails from './Pages/FamilyDetails';
import HolidayDetails from './Pages/HolidayDetails';
import Resorts from './Pages/Resorts';
import TrivandrumDetails from './components/ResortDetailedPage/TrivandrumDetails';
import KumarakomDetails from './components/ResortDetailedPage/KumarakomDetails';
import AlleppeyDetails from './components/ResortDetailedPage/AlleppeyDetails';
import MunnarDetails from './components/ResortDetailedPage/MunnarDetails';
import VagamonDetails from './components/ResortDetailedPage/VagamonDetails';
import ThekkadyDetails from './components/ResortDetailedPage/ThekkadyDetails';
import KochiDetails from './components/ResortDetailedPage/KochiDetails';
import WayanadDetails from './components/ResortDetailedPage/WayanadDetails';
import CalicutDetails from './components/ResortDetailedPage/CalicutDetails';
import ThrissurDetails from './components/ResortDetailedPage/ThrissurDetails';
import MalappuramDetails from './components/ResortDetailedPage/MalappuramDetails';
import KannurDetails from './components/ResortDetailedPage/KannurDetails';
import KasargodDetails from './components/ResortDetailedPage/KasargodDetails';
import CoorgDetails from './components/ResortDetailedPage/CoorgDetails';
import KodaikkanalDetails from './components/ResortDetailedPage/KodaikkanalDetails';
import OotyDetails from './components/ResortDetailedPage/OotyDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/honeymoonpackage" element={<Honeymoon />} />
        <Route exact path="/familypackage" element={<Family />} />
        <Route exact path="/holidaypackage" element={<Holiday />} />
        <Route exact path="/honeymoondetails/:id" element={<HoneymoonDetails/>} />
        <Route exact path="/familydetails/:id" element={<FamilyDetails/>} />
        <Route exact path="/holidaydetails/:id" element={<HolidayDetails/>} />
        <Route exact path="/resorts" element={<Resorts/>} />
        
        //resorts routes

        <Route exact path="/trivandrumresort/:id" element={<TrivandrumDetails/>} />
        <Route exact path="/kumarakomresort/:id" element={<KumarakomDetails/>} />
        <Route exact path="/alleppeyresort/:id" element={<AlleppeyDetails/>} />
        <Route exact path="/munnarresort/:id" element={<MunnarDetails/>} />
        <Route exact path="/vagamonresort/:id" element={<VagamonDetails/>} />
        <Route exact path="/thekkadyresort/:id" element={<ThekkadyDetails/>} />
        <Route exact path="/kochiresort/:id" element={<KochiDetails/>} />
        <Route exact path="/wayanadresort/:id" element={<WayanadDetails/>} />
        <Route exact path="/calicutresort/:id" element={<CalicutDetails/>} />
        <Route exact path="/thrissurresort/:id" element={<ThrissurDetails/>} />
        <Route exact path="/malappuramresort/:id" element={<MalappuramDetails/>} />
        <Route exact path="/kannurresort/:id" element={<KannurDetails/>} />
        <Route exact path="/kasargodresort/:id" element={<KasargodDetails/>} />
        <Route exact path="/coorgresort/:id" element={<CoorgDetails/>} />
        <Route exact path="/kodaikkanalresort/:id" element={<KodaikkanalDetails/>} />
        <Route exact path="/ootyresort/:id" element={<OotyDetails/>} />

      </Routes>

    </div>
  );
}

export default App;
