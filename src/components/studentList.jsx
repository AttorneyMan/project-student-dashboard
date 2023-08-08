import data from "../data/data.json";


 export default function studentList(){
    const studentsForRender = data.map(

        (eachStudentObj) => {
          return (<>
          <img src=" {eachStudentObj.profilePhoto}" alt="Image of Student" />
        <h4>
         Name : {eachStudentObj.names.preferredName},
         Username: {eachStudentObj.username},
         Dob: {eachStudentObj.dob},
         Cohort: {eachStudentObj.cohort.cohortCode} 
        </h4> 
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
