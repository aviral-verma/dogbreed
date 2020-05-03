import React from 'react';
import Data from "./data.json";
import navbar from "./navbar";

function Detail() {
  return (
    <div className="Breed">
      <div className="posts">
        <navbar/>
        { Data.map(post => {
          return(
            <>
           
             <h4>{ post.name }</h4>
             <p>{ post.life_span }</p>
             
             </>
          )
        })

        }
      </div>
    </div>
  )
}
export default Detail;