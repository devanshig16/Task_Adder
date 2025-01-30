document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const pendingTasks = document.getElementById("pendingTasks");
    const completedTasks = document.getElementById("completedTasks");

    // Load tasks from local storage when the page opens
    loadTasks();

    // When the Add Task button is clicked
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTask(taskText, false); // Add task to Pending list
        taskInput.value = ""; // Clear input field
        saveTasks(); // Save changes
    });

    // Function to add a new task
    function addTask(text, isCompleted) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${text}
            <div>
                <input type="checkbox" ${isCompleted ? "checked" : ""}>
                <button class="deleteBtn">❌</button>
            </div>
        `;

        if (isCompleted) {
            listItem.classList.add("completed");
            completedTasks.appendChild(listItem);
        } else {
            pendingTasks.appendChild(listItem);
        }

        // Mark task as completed
        listItem.querySelector("input").addEventListener("change", function () {
            listItem.classList.toggle("completed");
            if (this.checked) {
                completedTasks.appendChild(listItem);
            } else {
                pendingTasks.appendChild(listItem);
            }
            saveTasks();
        });

        // Delete task
        listItem.querySelector(".deleteBtn").addEventListener("click", function () {
            listItem.remove();
            saveTasks();
        });
    }

    // Function to save tasks to local storage
    function saveTasks() {
        const pending = [];
        const completed = [];

        document.querySelectorAll("#pendingTasks li").forEach(task => {
            pending.push(task.textContent.trim());
        });

        document.querySelectorAll("#completedTasks li").forEach(task => {
            completed.push(task.textContent.trim());
        });

        localStorage.setItem("pendingTasks", JSON.stringify(pending));
        localStorage.setItem("completedTasks", JSON.stringify(completed));
    }

    // Function to load saved tasks from local storage
    function loadTasks() {
        const pending = JSON.parse(localStorage.getItem("pendingTasks")) || [];
        const completed = JSON.parse(localStorage.getItem("completedTasks")) || [];

        pending.forEach(task => addTask(task, false));
        completed.forEach(task => addTask(task, true));
    }
});
