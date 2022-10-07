import React from "react";
import { movies } from "../data";

function Movies() {
  
  return <div>
     <h1>Movies Page</h1>
     {movies.map(({title, time, genres})=>(
        <p>
          {title}
          {time}
          <ul>
            {genres.map((item)=>(
              <li>
                {item}
              </li>
            ))}
          </ul>
        </p>
      ))}
  </div>;
}

export default Movies;
