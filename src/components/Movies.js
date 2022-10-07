import React from "react";
import { movies } from "../data";

function Movies() {

  return <div>
     <h1>Movies Page</h1>
     {movies.map(({title, time, genres}, i)=>(
        <div key={i}>
          {title}
          {time}
          <ul>
            {genres.map((item, i)=>(
              <li key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>  
      ))}
  </div>;
}

export default Movies;
