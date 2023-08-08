import data from "./data/data.json";
import Grid from "./components/grid";
import { Card } from "./components/card";

// const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9,]


function App() {

  const studentsForRender = data.map(

    (eachStudentObj) => {
      return (<>
      <Card/> 
     Name : {eachStudentObj.names.preferredName},
     Username: {eachStudentObj.username},
     Dob: {eachStudentObj.dob},
     Cohort: {eachStudentObj.cohort.cohortCode} 
     
  </> 
        
        )
    }

  )
  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <Grid arrOfObj = {studentsForRender} />
    </div>
  );
}







export default App;
