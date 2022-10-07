import React from "react";
import { directors } from "../data";

function Directors() {
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(({name,movies})=>(
        <div>
          {name}
          <ul>
            {movies.map((item)=>(
              <li>
                {item}
              </li>
            ))}
          </ul>
        </div>  
      ))}
    </div>
  )
}

export default Directors;
