import React from 'react';
import Data from "./data.json";
import Detail from "./Detail";
import {Link} from "react-router-dom";
import './breed.css';



function Breed() {
  return (
    <div className="Breed">
      <div className="posts">
        { Data.map(post => {
          return(
            <>
            
            <Link to={Detail}>
              <img src={ post.url} alt="images" width="200" height="200"/>
               </Link>
             <p>{ post.name }</p>
             <h6 className="life">{ post.life_span }</h6>
             </>
          )
        })

        }
      </div>
    </div>
  )
}
export default Breed;