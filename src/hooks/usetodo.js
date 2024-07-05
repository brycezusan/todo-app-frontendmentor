import { useContext } from "react"
import { TodoContext } from "../context/TodoProvider"

export const useTodo = () => {

  const contexto = useContext(TodoContext)

  if(!contexto) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return contexto;
 
}