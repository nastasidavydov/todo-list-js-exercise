
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    completeTask() {
      this.complete = true;
    },

    logTaskState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  }
  return task;
}





const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task2.completeTask();

task2.logTaskState()
