import React, { useState } from "react";
import { useTodo } from "../Context";


function TodoItem({ Todo }) {
     const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [Todomsg,setTodomsg]=useState(Todo.Todo)
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()

    const editTodo=() =>{
        updateTodo(Todo.id,{...Todo,Todo:Todomsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(Todo.id)
      }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                Todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={Todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${Todo.completed ? "line-through" : ""}`}
                value={Todomsg}
                onChange={(e) => setTodomsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (Todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={Todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(Todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
