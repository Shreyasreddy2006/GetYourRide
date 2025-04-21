import { createContext, useContext } from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SData } from "./searchdata";
import { BikeCom } from "../components/bikeComponent";

export const BData = createContext();

export function BikeData(){
    const man = useContext(SData)
    const [data , setdata] = useState();
    const [err , seterror] = useState();
    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/motorcycles' ,{
            headers : {
                'X-Api-Key' : import.meta.env.VITE_API_NINJAS_KEY
            },
            params : {
                'make' : `${man}`
            }
        }
        ).then(response => {
            setdata(response.data)
            console.log(response.data)
        }).catch(err => {
            seterror(err.data)
            console.log(err.data)
        })
    },[man])
    
    return(
        <>
         <BData.Provider value={data}>
            <BikeCom></BikeCom>
         </BData.Provider>
        </>
    )

}