import data from "./data/data.json";


function App() {

  const studentsForRender = data.map(
    
    (eachStudentObj)=>{
        return(<h4>{eachStudentObj.username}</h4>)
       }
   
)
   return (
    <div class="list">
      
      <h1>Student Dashboard</h1>
       {studentsForRender}
    </div>
    );
  }
     
  
  
  
   
 

export default App;
