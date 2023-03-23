
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
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Cancellation from './components/Cancellation/Cancellation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/honeymoonpackage" element={<Honeymoon />} />
        <Route  path="/familypackage" element={<Family />} />
        <Route  path="/holidaypackage" element={<Holiday />} />
        <Route  path="/honeymoondetails/:id" element={<HoneymoonDetails/>} />
        <Route  path="/familydetails/:id" element={<FamilyDetails/>} />
        <Route  path="/holidaydetails/:id" element={<HolidayDetails/>} />
        <Route  path="/resorts" element={<Resorts/>} />
        <Route  path="/termsandconditions" element={<TermsAndConditions/>} />
        <Route  path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route  path="/cancellation" element={<Cancellation/>} />
        
        //resorts routes

        <Route  path="/trivandrumresort/:id" element={<TrivandrumDetails/>} />
        <Route  path="/kumarakomresort/:id" element={<KumarakomDetails/>} />
        <Route  path="/alleppeyresort/:id" element={<AlleppeyDetails/>} />
        <Route  path="/munnarresort/:id" element={<MunnarDetails/>} />
        <Route  path="/vagamonresort/:id" element={<VagamonDetails/>} />
        <Route  path="/thekkadyresort/:id" element={<ThekkadyDetails/>} />
        <Route  path="/kochiresort/:id" element={<KochiDetails/>} />
        <Route  path="/wayanadresort/:id" element={<WayanadDetails/>} />
        <Route  path="/calicutresort/:id" element={<CalicutDetails/>} />
        <Route  path="/thrissurresort/:id" element={<ThrissurDetails/>} />
        <Route  path="/malappuramresort/:id" element={<MalappuramDetails/>} />
        <Route  path="/kannurresort/:id" element={<KannurDetails/>} />
        <Route  path="/kasargodresort/:id" element={<KasargodDetails/>} />
        <Route  path="/coorgresort/:id" element={<CoorgDetails/>} />
        <Route  path="/kodaikkanalresort/:id" element={<KodaikkanalDetails/>} />
        <Route  path="/ootyresort/:id" element={<OotyDetails/>} />

      </Routes>

    </div>
  );
}

export default App;
