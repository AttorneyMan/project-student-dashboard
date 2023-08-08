import data from "./data/data.json";
import Grid from "./components/grid";

const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9,]


function App() {

  const studentsForRender = data.map(

    (eachStudentObj) => {
      return (

        <h4>{eachStudentObj.username}</h4>)
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
