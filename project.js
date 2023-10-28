import { getTasks, addTask, deleteTask, editTask } from './storage.js';

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("task");
const addButton = document.getElementById("addButton");
const digitalClock = document.getElementById("digitalClock");

const externalDataUrl = 'external-data.json';
const quotesElement = document.getElementById('quotes');
const topicFilter = document.getElementById('topicFilter');

let tasks = getTasks() || [];

const displayQuotes = (quotes) => {
    quotesElement.innerHTML = '';
    quotes.forEach((quote) => {
        const quoteContainer = document.createElement('div');
        const personElement = document.createElement('p');
        const quoteBodyElement = document.createElement('p');
        const imgElement = document.createElement('img');

        personElement.textContent = `Author: ${quote.person}`;
        quoteBodyElement.textContent = `Quote: ${quote.body}`;
        imgElement.src = quote.imageUrl;
        imgElement.alt = quote.person;

        quoteContainer.appendChild(personElement);
        quoteContainer.appendChild(quoteBodyElement);
        quoteContainer.appendChild(imgElement);

        quotesElement.appendChild(quoteContainer);
    });
};

const getQuotes = async (selectedTopic) => {
    try {
        const response = await fetch("https://run.mocky.io/v3/8d0e3da3-c8cc-428a-a230-8928ee4ea256"); // Replace with the URL of your JSON file.

        if (response.ok) {
            const quoteList = await response.json();

            if (selectedTopic) {
                const filteredQuotes = quoteList.filter(quote => quote.topic === selectedTopic);
                displayQuotes(filteredQuotes);
            } else {
                displayQuotes(quoteList);
            }
        } else {
            console.error("Failed to fetch quote data.");
        }
    } catch (error) {
        console.error("An error occurred while fetching quote data:", error);
    }
};

getQuotes(); // Call this function initially.

topicFilter.addEventListener("change", () => {
    getQuotes(topicFilter.value); // Call the function with the selected topic.
});
function addNewTask(taskText) {
    tasks.push({ text: taskText, timestamp: new Date().toLocaleString() });
    updateTaskList();
    addTask(tasks); // Save the updated tasks to local storage
}

function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = `${task.text} (Added on: ${task.timestamp})`;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

function updateDigitalClock() {
    const now = new Date();
    digitalClock.textContent = now.toLocaleString();
}



addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    addNewTask(taskText);
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        // Handle "Edit" button click
        const taskIndex = Array.from(taskList.children).indexOf(event.target.closest("li"));
        const taskToEdit = tasks[taskIndex];
        const newTaskText = prompt("Edit task:", taskToEdit.text);
        if (newTaskText !== null) {
            editTask(tasks, taskIndex, newTaskText);
            updateTaskList();
        }
    } else if (event.target.classList.contains("delete-button")) {
        // Handle "Delete" button click
        const taskIndex = Array.from(taskList.children).indexOf(event.target.parentElement);
        tasks.splice(taskIndex, 1);
        updateTaskList();
        addTask(tasks); // Save the updated tasks to local storage
    }
});

// Initial update of the task list and digital clock on page load
updateTaskList();
// Update the clock every second (1000 milliseconds)
setInterval(updateDigitalClock, 1000);

// Load external data
loadExternalData();
