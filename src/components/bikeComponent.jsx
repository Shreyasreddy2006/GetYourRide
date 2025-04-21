import { useContext, useState } from "react";
import { BData } from "../store/apidata";
import { BikeDiv } from "./bikediv";
import '../App.css'
export function BikeCom(){
    const data = useContext(BData);
    const arr = [];
    if(data){
     for(let i = 0 ;i<30;i++){
       arr.push(data[i]);
     }
    }
    // return(
    //     <>
    //      {arr.map((item , index) => <BikeDiv item ={item} key={index}></BikeDiv> )}
    //     </>
    // );
    return (
        <div className="BikeGrid">
          {arr.map((item, index) => (
            <BikeDiv item={item} key={index} className="BDiv"/>
          ))}
        </div>
      );
}