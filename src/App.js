import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return(
    <>
    {/* <nav>
        <a href = "/">Home</a>
        <a href = "/about">About</a>
    </nav> */}

    <BrowserRouter>
      <Navigation/>
      <Route path ="/" exact = {true} component = {Home}/>
      <Route path ="/about" component = {About}/>
      <Route path = "/movie/:id" component = {Detail}/>
    </BrowserRouter>
    </>
  )
}

export default App;