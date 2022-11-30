import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = (e) => {
    if (value !== "") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          value,
          status: false,
        },
      ]);

      setValue("");
    }
    e.preventDefault();
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const changeText = (text) => {
    setValue(text);
  };

  const changeStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const changeVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section class="todoapp">
      <Form value={value} changeText={changeText} onSubmit={onSubmit} />

      <section class="main">
        <input class="toggle-all" type="checkbox" />
        <label for="toggle-all" onClick={() => changeVisible()}>
          Mark all as complete
        </label>

        {!isVisible ? (
          <TodoList
            data={todos}
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
            filter={filter}
          />
        ) : null}
      </section>

      <Footer
        data={todos}
        clearTodos={clearTodos}
        changeFilter={changeFilter}
        filter={filter}
      />
    </section>
  );
}

export default App;
