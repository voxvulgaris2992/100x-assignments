/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }

  add(task) {
    this.list.push(task);
  }

  get(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.list.length && this.list.length >= 1) {
      return this.list[taskIndex];
    }
    else {
      return null;
    }
  }

  update(taskIndex, taskUpdate) {
    if (taskIndex >= 0 && taskIndex < this.list.length && this.list.length >= 1) {
      this.list[taskIndex] = taskUpdate;
    }
  }

  remove(taskIndex) {
    this.list.splice(taskIndex, 1);
  }

  getAll() {
    return this.list;
  }

  clear() {
    this.list = [];
  }
}

module.exports = Todo;
