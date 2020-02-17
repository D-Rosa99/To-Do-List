import React, { Component } from "react";
import uuid from "uuid/v4";

import "./styles/newTodoForm.css";

class NewTodoForm extends Component {
  state = {
    Todo: "",
    id: ""
  };

  handleChange = evt => {
    this.setState({ Todo: evt.target.value, id: uuid() });
  };

  handleCreateTodo = evt => {
    evt.preventDefault();
    this.setState({ Todo: "", id: "" });
    this.props.createTodo(this.state);
  };

  render() {
    return (
      <form>
        <label className="NewTodoForm-label" htmlFor="TodoInput">
          Write a To-do task
        </label>
        <input
          key="TodoInput"
          id="TodoInput"
          type="text"
          onChange={this.handleChange}
          value={this.state.Todo}
        />
        <button className="NewTodoForm-button" onClick={this.handleCreateTodo}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default NewTodoForm;
