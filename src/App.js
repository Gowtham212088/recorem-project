import "./App.css";
import Navbar from "./Login Page/NavBar";
import Carousel from "./HomePage/Carousel";
import OurCompany from "./HomePage/OurCompany";
import Vmc from "./HomePage/VMC";
import OurServices from "./HomePage/OurServices";
import Footer from "./HomePage/Footer";
import {Switch,Route,Link} from "react-router-dom";
import LoginPage from "./Login Page/LoginPage";
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Carousel/>
      <OurCompany/>
      <Vmc/>
      <OurServices/>
      <Footer/>
    </div>
  );
}

export default App;
