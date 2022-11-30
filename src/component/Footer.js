import React from 'react'

function Footer({data, clearTodos , changeFilter, filter}) { 

  const count = data.filter((item) => item.status === false).length
  return (
    <div>
      <footer class="footer">
		<span class="todo-count">
			<strong>{count} </strong>
			items left
		</span>

		<ul class="filters">
			<li onClick={()=> changeFilter("all")}>
				<a href="#/" class={filter === "all"? "selected" : ""} 
        >All</a>
			</li>
			<li onClick={()=> changeFilter("active")}>
				<a href="#/" class={filter === "active"? "selected" : ""} >Active</a>
			</li>
			<li onClick={()=> changeFilter("completed")}>
				<a href="#/" class={filter === "completed"? "selected" : ""} >Completed</a>
			</li>
		</ul>

		<button class="clear-completed" onClick={()=> clearTodos()}>
			Clear completed
		</button>
	</footer>
    </div>
  )
}

export default Footer