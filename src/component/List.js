import React from "react";

function List({ todos, deleteTodo, checkBox}) {
  return (
    <ul class="todo-list">
      {/* <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Learn JavaScript</label>
          <button class="destroy"></button>
        </div>
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Learn React</label>
          <button class="destroy"></button>
        </div>
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Have a life!</label>
          <button class="destroy"></button>
        </div>
      </li> */}
      {todos.map((item) => {
        return (
          <li  class={item.status ?"completed" :null}>
            <div class="view">
              <input class="toggle" type="checkbox" onChange={() => checkBox(item.status)} />
              <label>{item.todo} </label>
              <button class="destroy" onClick={() => deleteTodo(item)}></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
