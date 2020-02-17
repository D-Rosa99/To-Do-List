import React, { Component } from "react";

import "./styles/todo.css";

class Todo extends Component {
  state = {
    editMode: false,
    editInput: this.props.task
  };

  handleInputChange = evt => {
    this.setState({ editInput: evt.target.value });
  };

  handleEdit = () => {
    this.handleEditMode();
    this.props.editTodo(this.state.editInput, this.props.id);
  };

  handleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    return (
      <div className="Todo">
        <input
          hidden={!this.state.editMode}
          type="text"
          value={this.state.editInput}
          onChange={this.handleInputChange}
        />
        <button
          className="Todo-btn"
          hidden={!this.state.editMode}
          onClick={this.handleEdit}
        >
          {" "}
          OK!
        </button>

        <p className="Todo-task" hidden={this.state.editMode}>
          {this.props.task}
        </p>

        <button
          className="Todo-btn"
          hidden={this.state.editMode}
          onClick={this.handleEditMode}
        >
          edit me!
        </button>

        <button
          className="Todo-btn"
          hidden={this.state.editMode}
          onClick={() => this.props.deleteTodo(this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Todo;
