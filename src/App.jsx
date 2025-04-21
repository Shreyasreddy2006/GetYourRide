import { useState } from "react";
import { Nav } from "./components/navbar";
import { Search } from "./components/searchpage";
import { Start } from "./components/start";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function App(){
  const [show , setshow] = useState(false);
  const change = () => {
    setshow(true);
  }
  return (
    <>
    <Nav></Nav>
    <Router>
      <Routes> 
       {show ? <Route path="/Search" element={<Search/>}/>: <Route path="/" element={<Start change={change}/>}/>}
      </Routes>
    </Router>
    </>
  );
}