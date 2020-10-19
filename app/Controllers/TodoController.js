import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _draw() {
  let template = ''
  let todos = document.getElementById("todos")
  ProxyState.todos.forEach(t => template += t.Template)
  todos.innerHTML = template
}

export default class TodoController {
  constructor() {
    todoService.getTodos();
    ProxyState.on("todos", _draw)
    _draw()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form.todo.value
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}