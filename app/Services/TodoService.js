import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'mick/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    console.log(res.data)
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos.push(res.data)
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo._id == todoId);
    let todoIndex = ProxyState.todos.findIndex(todo => todo._id == todoId);
    if (todo) {
      todo.completed = !todo.completed
      await api.put(url + todoId, todo);
      ProxyState.todos.splice(todoIndex, 1, new Todo(todo))
      ProxyState.todos = ProxyState.todos
    }

  }

  async removeTodo(todoId) {
    let todo = ProxyState.todos.find(t => t._id == todoId)
    let todoIndex = ProxyState.todos.findIndex(t => t._id == todoId)
    if (todo) {
      let res = await api.delete(url + todoId)
      console.log(res.data.message)
      ProxyState.todos.splice(todoIndex, 1)
      //TODO Work through this one on your own
      //		what is the request type
      //		once the response comes back, how do you update the state
    }
  }
}

const todoService = new TodoService();
export default todoService;