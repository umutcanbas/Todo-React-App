import React, { useState } from "react";
import List from "./List";
import Footer from "./Footer";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    setTodoList([...todoList, {
		todo,
		status:false
	}]);
    setTodo("");
  };

  const deleteTodo = (todo) => {
    let newTodos = todoList.filter((item) => item !== todo);
    setTodoList(newTodos);
  };

 /*  const checkBox=(e)=>{
	setTodoList([...todoList, {
		todo,
		status:false
	}]);
	let newCheck = todoList.status === true
    setTodoList(newCheck);


	 
  }
  console.log(todoList.status) */
  

  return (
    <div>
      <header class="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
      </header>
      <List todos={todoList} deleteTodo={deleteTodo} /* checkBox={checkBox} */  />
      <Footer todos={todoList} />
    </div>
  );
}

export default Todos;
