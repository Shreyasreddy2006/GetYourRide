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
        <>
         <h3>Gear Up for the Ride of a Lifetime – Explore the World of Bikes</h3>
         <input type="text" placeholder="Type in" onChange={(e) => manu.current = e.target.value}/>
         <button onClick={change}>Get</button>
         <SData.Provider value={man}>
           <BikeData></BikeData>
         </SData.Provider>
        </>
    );
}