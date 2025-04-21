import { useState } from "react";
import '../App.css'
export function BikeDiv({item , key}){

    const [show , setshow] = useState(false);
    const toggle = () => {
        setshow(!show);
    }
    return (
        <>
         {show ? <div key={key} className="BikeDiv">
            <h5>{item.model}</h5>
            <p>Year : {item.year}</p>
            <p>Engine : {item.engine}</p>
            <p>GearBox : {item.gearbox}</p>
            <p>Power : {item.power}</p>
            <p>Transmission : {item.transmission}</p>
            <p>Category : {item.type}</p>
            <p>Fuel-Capacity : {item.fuel_capacity}</p>
            <p>Economy : {item.fuel_consumption}</p>
            <p>Front-Brakes : {item.front_brakes}</p>
            <p>Rear-Brakes : {item.rear_brakes}</p>
            <p>Weight : {item.dry_weight}</p>
            <p>Displacement : {item.displacement}</p>
            <button onClick={toggle}>close</button>
         </div> : <div onClick={toggle} key={key}>{item.model}</div>}
        </>
    );
}