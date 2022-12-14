import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { sandboxServer } from "./AxiosService.js"

class TodosService {
  async getTodos() {
    const res = await sandboxServer.get(`${AppState.todoListOwner}/todos`)
    AppState.todos = res.data.map(t => new Todo(t))
  }

  async addTodo(todoData) {
    const res = await sandboxServer.post(`${AppState.todoListOwner}/todos`, todoData)
    AppState.todos = [...AppState.todos, new Todo(res.data)]
  }

  async removeTodo(todoId) {
    await sandboxServer.delete(`${AppState.todoListOwner}/todos/${todoId}`)
    AppState.todos = AppState.todos.filter(t => t.id != todoId)
  }

  async toggleTodoCompletion(todoId) {
    const todo = AppState.todos.find(t => t.id == todoId)
    if (!todo) {
      throw new Error('Could not find todo, check id')
    }
    todo.completed = !todo.completed
    await sandboxServer.put(`${AppState.todoListOwner}/todos/${todoId}`, todo)
    AppState.emit('todos')
  }
}

export const todosService = new TodosService()