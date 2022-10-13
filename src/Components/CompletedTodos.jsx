import React from 'react'

function CompletedTodos({toDos, setTodos}) {
    return (
        <div className='todos ' style={{ marginTop: '20px' }}>
            <h1 className='subHeading'>Completed ToDos</h1>
            {
                toDos.map((toDo, index) => {
                    if (toDo.isDone) {
                        return (
                            <div onClick={() => {
                                        setTodos(toDos.filter((toDo2) => {
                                            if (toDo2.id === toDo.id) {
                                                toDo2.isDone = false;
                                            }
                                            return toDo2
                                        }))
                                    }} className="todo completedTodos">
                                <div className="left">
                                    <p key={index}> {toDo.text}</p>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })
            }
        </div>
    )
}

export default CompletedTodos