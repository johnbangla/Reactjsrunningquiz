import React from "react";
import "../assets/style.css"

const Result = ({ title,score, playAgain,handleSubmit}) => 
(
  <div className="score-board">
    <div className="score">Your name {title} scored {score} / 5 correct answers!</div>

         

    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>


   

<div id="task-container">
    <div  id="form-wrapper">
       <form onSubmit={handleSubmit}  id="form">
          <div className="flex-wrapper">
              <div style={{flex: 6}}>
                  <input  className="form-control" id="title"   type="text" name="title" placeholder="" />
               </div>
               <div style={{flex: 4}}>
                  <input  className="form-control" id="score" value={score} type="text" name="score" placeholder="" />
               </div>

               <div style={{flex: 1}}>
                  <input id="submit" className="btn btn-warning" type="submit" name="Add"  />
                </div>
            </div>
      </form>
   
    </div>

   
</div>
    






 

      

    
  
  </div>




);

export default Result;

