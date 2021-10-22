import React from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Index} />
      <Route path='/contact' component={Contact}/>
    </BrowserRouter>
  );
}

export default App;
