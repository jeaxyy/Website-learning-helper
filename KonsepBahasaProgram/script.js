// Pomodoro Timer
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-timer');
const pauseButton = document.getElementById('pause-timer');
const resetButton = document.getElementById('reset-timer');

let timerInterval;
let isWorkSession = true;
let timeRemaining = 0;
let isPaused = false;

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function saveTimerState() {
    localStorage.setItem('pomodoroTimer', JSON.stringify({
        isWorkSession,
        timeRemaining,
        isPaused
    }));
}

function loadTimerState() {
    const savedState = JSON.parse(localStorage.getItem('pomodoroTimer'));
    if (savedState) {
        isWorkSession = savedState.isWorkSession;
        timeRemaining = savedState.timeRemaining;
        isPaused = savedState.isPaused;
        updateTimerDisplay();
        if (!isPaused) {
            runTimer();
        }
    } else {
        timeRemaining = workTimeInput.value * 60;
        updateTimerDisplay();
    }
}

function runTimer() {
    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;
            if (timeRemaining <= 0) {
                isWorkSession = !isWorkSession;
                timeRemaining = isWorkSession ? workTimeInput.value * 60 : breakTimeInput.value * 60;
                alert(isWorkSession ? 'Waktunya belajar!' : 'Waktunya istirahat!');
            }
            updateTimerDisplay();
            saveTimerState();
        }
    }, 1000);
}

startButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    if (!isPaused) {
        timeRemaining = isWorkSession ? workTimeInput.value * 60 : breakTimeInput.value * 60;
    }
    isPaused = false;
    updateTimerDisplay();
    runTimer();
});

pauseButton.addEventListener('click', () => {
    isPaused = true;
    clearInterval(timerInterval);
    saveTimerState();
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    isPaused = false;
    isWorkSession = true;
    timeRemaining = workTimeInput.value * 60;
    updateTimerDisplay();
    saveTimerState();
});

// Load the timer state when the page loads
window.addEventListener('load', loadTimerState);

// To-Do List
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoItems = document.getElementById('todo-items');
const statsDisplay = document.getElementById('stats');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoItems.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-50 rounded-lg p-3';
        
        const span = document.createElement('span');
        span.textContent = todo.text;
        if (todo.completed) span.classList.add('line-through', 'text-gray-500');

        const buttons = document.createElement('div');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Selesai';
        completeButton.className = 'btn text-white px-3 py-1 rounded mr-2';
        completeButton.addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.className = 'btn btn-delete text-white px-3 py-1 rounded';
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        buttons.appendChild(completeButton);
        buttons.appendChild(deleteButton);
        
        li.appendChild(span);
        li.appendChild(buttons);
        todoItems.appendChild(li);
    });

    updateStats();
}

function updateStats() {
    const completed = todos.filter(todo => todo.completed).length;
    const pending = todos.length - completed;
    statsDisplay.textContent = `Total: ${todos.length}, Selesai: ${completed}, Belum Selesai: ${pending}`;
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (todoInput.value.trim() === '') return;

    todos.push({ text: todoInput.value.trim(), completed: false });
    saveTodos();
    renderTodos();
    todoInput.value = '';
});

renderTodos();