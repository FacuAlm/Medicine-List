import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from "./components/Header";
import { Farmacia } from "./components/Farmacia";
import { Bioquimicos } from "./components/Bioquimicos";


function App() {
  return (
   
<Router>
  <div className="container mx-auto">
<Header/>

  <Routes>

    <Route path="/" element={<Bioquimicos/>}>
    </Route>

    <Route path="/Farmacia" element={<Farmacia/>}>
    </Route>
      
      
  
    

  </Routes>
  </div>
</Router>
  );
}

export default App;
