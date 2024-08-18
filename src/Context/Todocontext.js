import { createContext, useContext} from "react";

export const Todocontext=createContext({
    Todos:[
        {
            id:1,
            Todo:"todo message",
            completed:false,
        }
    ],
    addTodo : (Todo)=>{},
    updateTodo: (id, Todo ) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) =>{}
}) //context creation

export const useTodo= ()=>{
   return useContext(Todocontext) //context consumtion
}

export const Todoprovider=Todocontext.Provider