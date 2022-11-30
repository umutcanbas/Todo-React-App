function Todos({ onSubmit, value, changeText }) {
  return (
    <div>
      <header class="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={value}
            onChange={(e) => changeText(e.target.value)}
          />
        </form>
      </header>
    </div>
  );
}

export default Todos;
