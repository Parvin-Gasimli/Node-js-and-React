import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateExercise extends Component {
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

  onChangeUserName = (e) => {
    this.setState({
      username: e.target.value
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  };
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value
    });
  };
  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));
    console.log(exercise);
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 mt-5">
            <h3 className="bg-success text-center text-white">
              Create Exercise
            </h3>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username:</label>
                <select
                  ref="userInput"
                  required
                  className="form-control shadow-none"
                  value={this.state.username}
                  onChange={this.onChangeUserName}
                >
                  {this.state.users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input
                  type="text"
                  required
                  className="form-control shadow-none"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>Duration in(Minutes):</label>
                <input
                  type="text"
                  required
                  className="form-control shadow-none"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
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
    );
  }
}
