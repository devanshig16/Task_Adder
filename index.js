document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const pendingTasks = document.getElementById("pendingTasks");
    const completedTasks = document.getElementById("completedTasks");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Load tasks from local storage
    loadTasks();

    // Add a new task
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTask(taskText, false);
        taskInput.value = "";
        saveTasks();
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        saveTheme();
    });

    // Add task function
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

    // Save tasks to local storage
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

    // Load tasks from local storage
    function loadTasks() {
        const pending = JSON.parse(localStorage.getItem("pendingTasks")) || [];
        const completed = JSON.parse(localStorage.getItem("completedTasks")) || [];

        pending.forEach(task => addTask(task, false));
        completed.forEach(task => addTask(task, true));

        // Load theme
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
    }
    
});
