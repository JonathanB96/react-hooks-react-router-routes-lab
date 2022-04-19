import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Pages</h1>
   
       {movies.map((item)=>{
         return <div key={item.title}> 
           <p>{item.title}</p>
           <p>{item.time}</p>
           <ul>{item.genres.map((genre)=>{
             return <li key={genre}>
               {genre}
             </li>
           })}</ul>
         </div>
       })}
     
  </div>;
}

export default Movies;
