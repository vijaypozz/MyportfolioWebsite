import React from "react";
import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Home from "../src/View/Home/Home"
import Skills from "./View/Skills/Skills";
import Projects from "./View/Projects/Projects";
import About from "./View/About/About";
import Footer from "./View/Footer/Footer";
import Particle from "./background_particles/Particles";


const App = () => {
  return (
    
<Router>
<Particle />
<NavBar/>
<Routes >
<Route  path="/" element={<Home/>}  />
</Routes>
<Skills/>
<Projects/>
<About/>
<Footer/>

</Router>


  )
}

export default App
