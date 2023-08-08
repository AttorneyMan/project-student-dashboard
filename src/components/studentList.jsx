import data from "../data/data.json"
// import { useState } from "react";

 function studentList(){
   const studentsForRender = data.map(
    
    (eachStudentObj)=>{
        return( <div>
       <img src="" alt= "Image of student" />
       <h4>{eachStudentObj.username}</h4>

        </div>
        
        )
       }
   
)
   return(
<div className="list">
<h4>List Of Students</h4>
{studentList}

</div>


   );

}

export default  studentList();