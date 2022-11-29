import "./App.css";

import Todos from "./component/Todos";

function App() {
  return (
    <div className="App">
      <section class="todoapp">
        <Todos />

        <section class="main">
          <input class="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
        </section>
      </section>
    </div>
  );
}

export default App;
