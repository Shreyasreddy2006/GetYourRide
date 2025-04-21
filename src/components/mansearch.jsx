import { useRef, useState } from "react";
import { SData } from "../store/searchdata";
import { BikeData } from "../store/apidata";

export function ManSearch(){
    const [man , setman] = useState('')
    const manu = useRef('')
    const change = () => {
        setman(manu.current);
        console.log(manu.current)
    }
    return(
        <div className="search-container">
         <h3>Gear Up for the Ride of a Lifetime – Explore the World of Bikes</h3>
         <div className="search-input-group">
           <input 
             type="text" 
             className="search-input"
             placeholder="Enter manufacturer name..." 
             onChange={(e) => manu.current = e.target.value}
           />
           <button onClick={change} className="search-button">Get</button>
         </div>
         <SData.Provider value={man}>
           <BikeData></BikeData>
         </SData.Provider>
        </div>
    );
}