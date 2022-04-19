import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
   <h1>Directors Page</h1>
   {directors.map((item)=>{
     return <div key={item.name}>
     <p>{item.name}</p>
     <ul>
       {item.movies.map((el)=>{
         return <li key={el}>{el}</li>

       })}
       
     </ul></div>
   })}

  </div>;
}

export default Directors;
