function addTask() {
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list");

        list.appendChild(newTask);
    }
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    addTask();
})