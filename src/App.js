import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';
// import BookNowPage from './pages/BookNowPage.js';
import Contact from './pages/ContactForm';
// Uncomment and import additional components if needed
// import LoginForm from './pages/LoginUser.js';
import UserRegistrationForm from './pages/UserRegistrationForm.js';
import WorkerRegistrationForm from './pages/WorkerRegistrationForm.js';
import WorkerProfilePage from './pages/WorkerProfilePage.js';
import RoleSelection from './pages/RoleSelection.js';
import LoginA from './pages/LoginForm_A.js';
import LoginU from './pages/LoginForm_U .js';
import RegistrationForm from './pages/UserRegistrationForm.js';
// import LoginUser from './pages/LoginUser.js';

// import RegisterUser from './pages/RegisterUser.js';
// import RegisterUser from './pages/RegisterUser.js';
import Payment from './pages/Payment.js';
import BookingPage from './pages/BookingPage.js';



import SweepingPage from "./pages/SweepingPage";
import CookingPage from "./pages/CookingPage";
import GardeningPage from "./pages/GardeningPage";
import BabysittingPage from "./pages/BabysittingPage";
import PatientCarePage from "./pages/PatientCarePage";
import PetCarePage from "./pages/PetCarePage";





function WorkerProfileWrapper() {
  const location = useLocation();
  return <WorkerProfilePage workerData={location.state?.workerData} />;
}

function App() {
  return (
    <Router>
      <>
        <Navbar /> {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/book" element={<BookNowPage />} /> */}
          <Route Path ="/payment" element ={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/register" element={<RegistrationForm />} />
         
          <Route path="/loginA" element={<LoginA />} />
          <Route path="/loginU" element={<LoginU />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* Uncomment these routes as needed */}
          <Route path="/worker-profile" element={<WorkerProfileWrapper />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/roleSelection" element={<RoleSelection />} />
          <Route path="/userRegistrationForm" element={<UserRegistrationForm />} />
          <Route path="/workerRegistrationForm" element={<WorkerRegistrationForm />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/worker-register" element={<WorkerRegistrationForm />} />
          <Route path="/booking" element={<BookingPage />} />          
          {/* <Route path="/RegistrationForm" element={<RegistrationForm />} />/ */}
          {/* <Route path="/registermaid" element={<RegisterMaid />} /> */}


        <Route path="/sweeping" element={<SweepingPage />} />
        <Route path="/cooking" element={<CookingPage />} />
        <Route path="/gardening" element={<GardeningPage />} />
        <Route path="/babysitting" element={<BabysittingPage />} />
        <Route path="/patient-care" element={<PatientCarePage />} />
        <Route path="/pet-care" element={<PetCarePage />} />



        </Routes>
        <Footer /> 
        
      </>
    </Router>
  );
}

export default App;