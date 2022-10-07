import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(({name,movies})=>(
        <p>
          {name}
          <ul>
            {movies.map((item)=>(
              <li>
                {item}
              </li>
            ))}
          </ul>
        </p>  
      ))}
  </div>;
}

export default Actors;
