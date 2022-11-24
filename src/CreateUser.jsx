import React, { Component } from "react";
import axios from "axios"

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  onChangeUserName = (e) => {
    this.setState({
      username: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username
    };
   axios.post("http://localhost:5000/users/add",user).then(res=>console.log(res.data))
    this.setState({
      username: ""
    });
  };

  render() {
    return (

        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 mt-5">
            <h3 className="bg-success text-center text-white">
              Create User
            </h3>

            <form onSubmit={this.onSubmit}>
            
              <div className="form-group">
                <label>UserName:</label>
                <input
                  type="text"
                  required
                  className="form-control shadow-none"
                  value={this.state.username}
                  onChange={this.onChangeUserName}
                />
              </div>
            
             
              <div className="form-group">
                <input
                  type="submit"
                  value="Create"
                  className="btn btn-primary my-3 p-2 w-100"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
