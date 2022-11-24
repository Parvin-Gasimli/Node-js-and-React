import axios from 'axios'
import React,{Component} from 'react'
import { Link } from 'react-router-dom'

const Exercise=props=>(
<tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
        <Link to={"/edit/"+props.exercise._id}>Edit</Link>
        | <a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</a>
    </td>
</tr>

)

export default class  ExerciseList extends Component {
    constructor(props){
        super(props)
        this.state={exercises:[]}
    }

    componentDidMount(){
        axios.get("http://localhost:5000/exercises/")
        .then(response=>{
            this.setState({exercises:response.data})
        })
        .catch(err=>console.log(err))
    }
    deleteExercise=(id)=>{
        axios.delete("http://localhost:5000/exercises/"+id)
        .then(res=>console.log(res.data))
        this.setState({
            exercises:this.state.exercises.filter(el=>el._id!==id)
        })
    }

    exerciseList=()=>{
        return this.state.exercises.map(currentexercise=>{
            return<Exercise exercise={currentexercise} deleteExercise={this.deleteExercise}
             key={currentexercise._id}
            >

            </Exercise>
        })
    }



    render(){
        return(
            <div className='container'>
                <div className='row justify-content-center'>
            <div className='col-lg-6'>
                <h3>Exercise Table List</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                        <td>Username</td>
                        <td>Description</td>
                        <td>Duration</td>
                        <td>Date</td>
                        <td>Action</td>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>

                </table>
                
                </div>     
                </div>
            </div>
        )
    }
}

