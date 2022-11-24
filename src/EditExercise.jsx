import React, { Component } from 'react'

export default class EditExercise  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => user.username),
          username: res.data[0].username
        });
      }
    });
  }
 render(){
  return(
    <div>

    </div>
  )
 }
}

