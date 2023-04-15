
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
import Kerala from './components/contents/medicalTourism/Kerala';
import Banglore from './components/contents/medicalTourism/Banglore';
import Mumbai from './components/contents/medicalTourism/Mumbai';
import Delhi from './components/contents/medicalTourism/Delhi';
import Vellore from './components/contents/medicalTourism/Vellore';
import Jaipur from './components/contents/medicalTourism/Jaipur';
import Ayurveda from './components/contents/treatments/Ayurveda';
import Allopathic from './components/contents/treatments/Allopathic';
import Homeo from './components/contents/treatments/Homeo copy';
import Unani from './components/contents/treatments/Unani';
import Acupuncture from './components/contents/treatments/Acupuncture';
import Nature from './components/contents/treatments/Naturopathy';
import Fragrant from './components/contents/treatments/Fragrant';
import Contemplation from './components/contents/treatments/Contemplation';
import Weight from './components/contents/treatments/Weight';
import Chiropractic from './components/contents/treatments/Chiropractic';
import Maligant from './components/contents/clinical/Maligant';
import Heart from './components/contents/clinical/Heart';
import Dental from './components/contents/clinical/Dental';
import Skin from './components/contents/clinical/Skin';
import Joint from './components/contents/clinical/Joint';
import Diabetes from './components/contents/clinical/Diabetes';
import Liver from './components/contents/clinical/Liver';
import Kidney from './components/contents/clinical/Kidney';
import Back from './components/contents/clinical/Back';
import Infertility from './components/contents/clinical/Infertility';
import Ivf from './components/contents/clinical/Ivf';
import Speech from './components/contents/clinical/Speech';
import Meetings from './components/contents/mice/Meetings';
import Incentives from './components/contents/mice/Incentives';
import Conference from './components/contents/mice/Conferences';
import Exhibitions from './components/contents/mice/Exhibitions';
import Drumming from './components/contents/adventure/Drumming';
import Flyboard from './components/contents/adventure/Flyboard';
import Dragon from './components/contents/adventure/Dragon';
import Group from './components/contents/adventure/Group';
import Golf from './components/contents/adventure/Golf';
import Sea from './components/contents/adventure/Sea';
import Dirt from './components/contents/adventure/Dirt';
import Off from './components/contents/adventure/Off';
import Swim from './components/contents/adventure/Swim';
import Rally from './components/contents/adventure/Rally';
import Quad from './components/contents/adventure/Quad';
import Dive from './components/contents/adventure/Dive';
import Sky from './components/contents/adventure/Sky';
import Paint from './components/contents/adventure/Paint';
import Bungee from './components/contents/adventure/Bungee';
import Flying from './components/contents/adventure/Flying';
import Clay from './components/contents/adventure/Clay';
import Gala from './components/contents/gala/Gala';
import DataProvider from './DataProvider';

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

        //medical tourism contents
        <Route  path="/kerala" element={<Kerala/>} />
        <Route  path="/bangalore" element={<Banglore/>} />
        <Route  path="/mumbai" element={<Mumbai/>} />
        <Route  path="/delhi" element={<Delhi/>} />
        <Route  path="/vellore" element={<Vellore/>} />
        <Route  path="/jaipur" element={<Jaipur/>} />

        //treatments contents
        <Route  path="/ayurveda" element={<Ayurveda/>} />
        <Route  path="/allopathy" element={<Allopathic/>} />
        <Route  path="/homeo" element={<Homeo/>} />
        <Route  path="/unani" element={<Unani/>} />
        <Route  path="/accu" element={<Acupuncture/>} />
        <Route  path="/nature" element={<Nature/>} />
        <Route  path="/fragrant" element={<Fragrant/>} />
        <Route  path="/contemplation" element={<Contemplation/>} />
        <Route  path="/weight" element={<Weight/>} />
        <Route  path="/cri" element={<Chiropractic/>} />

        //clinical contents
        <Route  path="/maligant" element={<Maligant/>} />
        <Route  path="/heart" element={<Heart/>} />
        <Route  path="/dental" element={<Dental/>} />
        <Route  path="/skin" element={<Skin/>} />
        <Route  path="/joint" element={<Joint/>} />
        <Route  path="/diabetes" element={<Diabetes/>} />
        <Route  path="/liver" element={<Liver/>} />
        <Route  path="/kidney" element={<Kidney/>} />
        <Route  path="/backpain" element={<Back/>} />
        <Route  path="/infe" element={<Infertility/>} />
        <Route  path="/ivf" element={<Ivf/>} />
        <Route  path="/speech" element={<Speech/>} />

        //mice contents
        <Route  path="/meetings" element={<Meetings/>} />
        <Route  path="/incentives" element={<Incentives/>} />
        <Route  path="/conference" element={<Conference/>} />
        <Route  path="/exhibitions" element={<Exhibitions/>} />

        //adventure contents
        <Route  path="/drumming" element={<Drumming/>} />
        <Route  path="/flyboard" element={<Flyboard/>} />
        <Route  path="/dragon" element={<Dragon/>} />
        <Route  path="/group" element={<Group/>} />
        <Route  path="/golf" element={<Golf/>} />
        <Route  path="/sea" element={<Sea/>} />
        <Route  path="/dirt" element={<Dirt/>} />
        <Route  path="/off" element={<Off/>} />
        <Route  path="/swim" element={<Swim/>} />
        <Route  path="/rally" element={<Rally/>} />
        <Route  path="/quad" element={<Quad/>} />
        <Route  path="/dive" element={<Dive/>} />
        <Route  path="/sea" element={<Sea/>} />
        <Route  path="/sky" element={<Sky/>} />
        <Route  path="/paint" element={<Paint/>} />
        <Route  path="/bungee" element={<Bungee/>} />
        <Route  path="/flying" element={<Flying/>} />
        <Route  path="/clay" element={<Clay/>} />

        //gala content
        <Route  path="/gala" element={<Gala/>} />


      </Routes>

    </div>
  );
}

export default App;
