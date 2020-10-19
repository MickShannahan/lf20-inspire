export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = data.completed || false
  }

  get Template() {
    let subTemplate = ''
    subTemplate += `<li class="col-12 `
    if (this.completed) {
      subTemplate += `todo-completed`
    }
    subTemplate += `">${this.description}
    <div class=" btn btn-outline-light" onclick="app.todoController.toggleTodoStatus('${this._id}')">o</div>
    <div class=" btn btn-outline-light"onclick="app.todoController.removeTodo('${this._id}')">x</div>
    </li>
    `
    return subTemplate
  }
}