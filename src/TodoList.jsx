import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm ";
import Todo from "./Todo";

import "./styles/todoList.css";

class TodoList extends Component {
  state = {
    todoList: []
  };

  editTodo = (value, id) => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        return item.id === id ? { id: item.id, Todo: value } : item;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.id !== id)
    });
  };

  createTodo = todo => {
    this.setState({ todoList: [...this.state.todoList, todo] });
  };

  render() {
    const Todos = this.state.todoList.map(item => (
      <Todo
        key={item.id}
        id={item.id}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
        task={item.Todo}
      />
    ));

    return (
      <div className="TodoList">
        <h1 className="TodoList-title">Todo List</h1>
        <NewTodoForm createTodo={this.createTodo} />
        {Todos}
      </div>
    );
  }
}

export default TodoList;
