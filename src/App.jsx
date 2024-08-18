import { useState, useEffect } from 'react'
import { Todoprovider } from './Context'
import './App.css'
import { Todoform } from './component'
import { Todoitem } from './component'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (Todo) => {
    setTodos((prev) => [{id: Date.now(), ...Todo}, ...prev] )
  }

  const updateTodo = (id, Todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? Todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((Todo) => Todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"))

    if (Todos && Todos.length > 0) {
      setTodos(Todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  }, [Todos])
  
  return (
    <Todoprovider value={{Todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Ranjeet Yadav schedule Todolist</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((Todo) => (
                          <div key={Todo.id}
                          className='w-full'
                          >
                            <Todoitem Todo={Todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
