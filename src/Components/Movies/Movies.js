import React from 'react'
import './movies.css'
function Movies() {

  
  return (
    <div className="movies-container" id="movies">
    <div className="movie-box">
       <div className="movie-pic">
        <img src="./Images/wee1.jpg" alt="Marvel"/> 
        <img src="./Images/wee2.jpg" alt=""/>
       </div>
       <div className="movie-search">
         <div className="movie-input">
          <input type="text" id="movie-input" placeholder="Enter the Movie Name"/>
          <button>Enter</button>
         </div>
           
         <div className="movie-output">
           <h1>Loading...</h1>
           <span>Loading...</span>
         </div>
      </div>
    </div>
   </div>)
}

export default Movies
