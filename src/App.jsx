import { useState } from "react";
import { Nav } from "./components/navbar";
import { Search } from "./components/searchpage";
import { Start } from "./components/start";
export default function App(){
  const [show , setshow] = useState(false);
  const change = () => {
    setshow(true);
  }
  return (
    <>
     <Nav></Nav>
     {show ? <Search/> : <Start change={change}/>}
    </>
  );
}