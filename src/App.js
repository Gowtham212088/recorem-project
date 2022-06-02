import "./App.css";
import Navbar from "./HomePage/NavBar";
import Carousel from "./HomePage/Carousel";
import OurCompany from "./HomePage/OurCompany";
import Vmc from "./HomePage/VMC";
import OurServices from "./HomePage/OurServices";
import Footer from "./HomePage/Footer";
import SignUp from "./Login Page/SignUp";
import {Switch,Route} from "react-router-dom";
import LoginPage from "./Login Page/LoginPage";
function App() {
  return (
    <div className="App">
     
      <Navbar/>

      <Switch>

      <Route path="/" exact >
       
      <Carousel/>
      <OurCompany/>
      <Vmc/>
      <OurServices/>
      <Footer/>

      </Route>

      <Route path="/Home"  >
       
       <Carousel/>
       <OurCompany/>
       <Vmc/>
       <OurServices/>
       <Footer/>
 
       </Route>

      <Route path="/signup" >

      <SignUp/>

      </Route>

      </Switch>
    </div>
  );
}

export default App;
