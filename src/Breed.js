import React from 'react';
import Data from "./data.json";
import Detail from "./Detail";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Route from 'react-router-dom/Route';
import './breed.css';



function Breed() {
  return (
    <Router>
    <Route path="/Detail" exact strict component={Detail}>
    </Route>
          <div className="Breed">
      <div className="posts">
        { Data.map(post => {
          return(
              
            <>
            
            <Link to = "/Detail">
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
    </Router>

  )
}
export default Breed;