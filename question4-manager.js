const Task = require("./question4-model");

class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 1;
  }

  addTask(name, description) {
    const id = this.currentId++;
    const newTask = new Task(id, name, description);
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id) || null;
  }

  updateTask(id, name, description) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return null;
    }

    this.tasks[taskIndex].name = name;
    this.tasks[taskIndex].description = description;

    return this.tasks[taskIndex];
  }

  deleteTask(id) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);

    return this.tasks.length !== initialLength;
  }
}

module.exports = TaskManager;
