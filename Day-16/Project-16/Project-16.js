
/*
Why do we keep tasks in an array?

The array is our single source of truth.
Whenever a task is added, deleted, or completed,
we update the array and call render().

This keeps our data and webpage synchronized
and makes the application easier to manage.
*/


// (2) Task array

let tasks = [
    {
        id: 1,
        text: "Learn JavaScript",
        done: false
    },
    {
        id: 2,
        text: "Practice DOM Manipulation",
        done: false
    }
];


// (3) render()

function render() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const li = document.createElement("li");

        // Store task ID
        li.dataset.id = task.id;

        const span = document.createElement("span");

        span.textContent = task.text;

        // Add completed class if task is done
        if (task.done === true) {
            span.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        // Identify delete button
        deleteBtn.classList.add("deleteBtn");

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });


    // Count incomplete tasks
    const remainingTasks = tasks.filter(function(task) {
        return task.done === false;
    }).length;

    // Update counter
    const taskCounter = document.getElementById("taskCounter");

    taskCounter.textContent =
        remainingTasks + (remainingTasks === 1 ? " task left" : " tasks left");

}


// (4) Add new task

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

taskForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input value
    const taskText = taskInput.value.trim();

    // Ignore empty input
    if (taskText === "") {
        return;
    }

    // Create new task object
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };

    // Add task to array using spread
    tasks = [...tasks, newTask];

    // Clear input field
    taskInput.value = "";

    // Update the page
    render();

});


// (5) Event delegation on ul

const taskList = document.getElementById("taskList");

taskList.addEventListener("click", function(event) {

    // Find the clicked li
    const li = event.target.closest("li");

    // If no li was clicked, stop
    if (!li) {
        return;
    }

    // Get task ID
    const taskId = Number(li.dataset.id);

    // Check if Delete button was clicked
    if (event.target.classList.contains("deleteBtn")) {

        // Remove task using filter()
        tasks = tasks.filter(function(task) {
            return task.id !== taskId;
        });

    }

    // Otherwise, check if task text was clicked
    else if (event.target.tagName === "SPAN") {

        // Toggle done using map()
        tasks = tasks.map(function(task) {

            if (task.id === taskId) {

                return {
                    ...task,
                    done: !task.done
                };

            }

            return task;

        });

    }

    // Update the page
    render();

});


// Initial rendering
render();
