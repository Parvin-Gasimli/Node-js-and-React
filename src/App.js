import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ExerciseList from './ExerciseList';
import EditExercise from './EditExercise';
import CreateExercise from './CreateExercise';
import CreateUser from './CreateUser';
import Navbar from './Navbar';


function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" index element={<ExerciseList/>}/> 
      <Route path="/edit/id"  element={<EditExercise/>}/>  
      <Route path="/create"  element={<CreateExercise/>}/>  
      <Route path="/user"  element={<CreateUser/>}/>  
    </Routes>
    
    </BrowserRouter>


  );
   

}

export default App;
