import "./App.css";
import Navbar from "./HomePage/NavBar";
import Carousel from "./HomePage/Carousel";
import SignUp from "./Client Pages/AddArticle";
import LoginPage from "./Login Page/LoginPage";
import { Routes, Route, Link,useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
   <Route path="/" element={<Carousel/>} />
     <Route path="/Home" element={<Carousel/>} /> 
     <Route path="/WriteArticle"  element={<SignUp/>} />
   </Routes>
   </div>
  );
}

export default App;
