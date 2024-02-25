import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import "tailwindcss/tailwind.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import InfoCard from "./Components/InfoCard";
import HomePage from "./Components/Homepage";
import ChatPage from "./pages/ChatPage";
import Labourjob from "./pages/Labourjob";
import Authentication from "./Components/Signup";
import ProfileForm from "./Components/Profileform";
import Dashboard from "./pages/Dashboardfree";
import Labourfilter from "./Components/Labourfilter";
import WelcomePage from "./Components/WelcomePage";
import Hello from "./Components/freelancer.jsx";
import Navlabour from "./Components/Navlabour";
import Labour from "./Components/LabourHomeSection";
import LabourSignup from "./Components/LabourSignup";
import Profile from "./Components/Profile";
import LabourEmployhome from "./pages/LabourEmployhome";
import PaymentInitPage from "./Components/PaymentInitPage";
import JobForm from "./Components/JobForm";
import InsurancePage from "./pages/Insurance";
import MainContainer from "./Components/Collaboration/MainContainer";
import Welcome from "./Components/Collaboration/Welcome";
import CreateGroups from "./Components/Collaboration/CreateGroups";
import ChatArea from "./Components/Collaboration/ChatArea";
import User_Groups from "./Components/Collaboration/User_Groups";
import Groups_G from "./Components/Collaboration/Groups_G";
import CheckOut from "./Components/CheckOut";
import TableComponent from "./Components/TableComponent";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/freelancehome" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/infogrid" element={<InfoCard />} />
        <Route path="/Signin" element={<Authentication />} />
        <Route path="/Signin/form" element={<ProfileForm />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/profile/chat" element={<ChatPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/labourjobs" element={<Labourjob />} />
        <Route path="/information" element={<Hello />} />
        <Route path="/labourhomepage" element={<Labour />} />
        <Route path="/labour-signin" element={<LabourSignup />} />
        <Route path="/labour-Profile" element={<Profile />} />
        <Route path="/labour-employer-home" element={<LabourEmployhome />} />
        <Route path="/payment-init" element={<PaymentInitPage />} />
        <Route path="/modify-jobs" element={<JobForm />} />
        <Route path="/labourhomepage/insurance" element={<InsurancePage />} />
        <Route path="/collab" element={<MainContainer />} />
        <Route path="/collab/welcome" element={<Welcome />} />
        <Route path="/collab/chat" element={<ChatArea />} />
        <Route path="/collab/creategroups" element={<CreateGroups />} />
        <Route path="/collab/usergroups" element={<User_Groups />} />
        <Route path="/collab/groups_g" element={<Groups_G />} />
        <Route path="/categories/infogrid/Checkout" element={<CheckOut />} />
        <Route path="/addworker" element={<TableComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
