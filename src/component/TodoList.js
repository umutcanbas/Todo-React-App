import React, {useState, useEffect} from "react";


function List({data , deleteTodo , changeStatus , filter}) {

  const[filteredData, setFilteredData] = useState(data)
  const activeTodos = data.filter(item=> item.status === false)
  const completedTodos = data.filter(item=> item.status === true)

  useEffect(()=>{
    if(filter === "active"){
      setFilteredData(activeTodos)
    } else if(filter ==="completed") {
      setFilteredData(completedTodos)
    } else {
      setFilteredData(data)
    }


  },[data, filter])

  
  return (
   
           <ul class="todo-list">
         {
          filteredData.map(item =>{
            return(
              <li class={item.status? "completed" : null}>
              <div class="view">
                <input class="toggle" type="checkbox" checked={item.status} onClick={()=>changeStatus(item.id)} />
                <label>{item.value} </label>
                <button class="destroy" onClick={() => deleteTodo(item.id)}></button>
              </div>
            </li>
            )
          })
         }
         
        </ul>
   
  );
}

export default List;
