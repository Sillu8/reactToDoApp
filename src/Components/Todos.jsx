import React from 'react'

function Todos({toDos, setTodos}) {
  return (
    <div className="todos">
        {
          toDos.map((toDo, index) => {
            if (!toDo.isDone) {
              return (
                <div className="todo">
                    {/* Mark Completed */}
                  <div className="left">
                    <input onChange={(e) => {
                      const newTodos = [...toDos];
                      newTodos[index].isDone = e.target.checked;
                      setTodos(newTodos);
                    }} type="checkbox" name="" id="" />
                    <p key={index}> {toDo.text}</p>
                  </div>

                  {/* Remove ToDo */}
                  <div className="right">
                    <i onClick={()=>{
                        const newTodos = [...toDos];
                        newTodos.splice(index,1);
                        setTodos(newTodos);
                    }} className="fas fa-times"></i>
                  </div>
                </div>
              )}
            return null;
          })
        }
      </div>
  )
}

export default Todos