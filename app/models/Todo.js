export default class Todo {
  constructor(data) {
    this.id =
      this.todo = data.todo
    this.complete = false
  }

  get Template() {
    return `
    <li class="col-8">${this.todo}</li>
    <div class="col-2" onclick="app.todoController.toggleTodoStatus('${this.id}')">o</div>
    <div class="col-2"oncclick="app.todoController.removeTodo('${this.id}')>x</div>`
  }
}