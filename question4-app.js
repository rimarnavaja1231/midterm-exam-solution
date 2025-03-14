const TaskManager = require('./question4-manager');

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Demonstrate CRUD operations

// 1. CREATE - Add some tasks
console.log('--- Adding Tasks ---');
const task1 = taskManager.addTask('Complete assignment', 'Finish the JavaScript assignment by Friday');
console.log('Added task:', task1);

const task2 = taskManager.addTask('Study for exam', 'Review chapters 5-8 for the upcoming test');
console.log('Added task:', task2);

// 2. READ - Get all tasks and get a specific task
console.log('\n--- Reading Tasks ---');
console.log('All tasks:', taskManager.getAllTasks());
console.log('Task with ID 1:', taskManager.getTaskById(1));

// 3. UPDATE - Update task details
console.log('\n--- Updating a Task ---');
const updatedTask = taskManager.updateTask(1, 'Complete assignment ASAP', 'Finish the JavaScript assignment by Thursday');
console.log('Updated task:', updatedTask);
console.log('All tasks after update:', taskManager.getAllTasks());

// 4. DELETE - Remove a task
console.log('\n--- Deleting a Task ---');
const deleteResult = taskManager.deleteTask(2);
console.log('Task deleted successfully?', deleteResult);
console.log('Remaining tasks:', taskManager.getAllTasks());

// Trying to find a deleted task should return null
console.log('Trying to find deleted task:', taskManager.getTaskById(2));
