// Создаю массив
const tasks = [];

// Добавляю задачу
function addTask() {
    const taskName = document.getElementById('taskInput');
    const task = taskName.value.trim();

    // Проверяю, чтобы задача не была пустой
    if (task === "") {
        alert("Имя задачи не может быть пустым!");
        return;
    }

    // Введенная задача помещается в массив
    tasks.push({
        name: task
    });

    // Вывожу задачу вместе с кнопкой "Удалить"
    const li = document.createElement('li');
    li.innerHTML = `
        <button class="png_complete" onClick="completeTask(this)"></button>
        <button class="png_delete" onClick="deleteTask(this)"></button>
        <span class="span" ondblclick="editTask(this)" >${task}</span>
    `;
    ulTasks.append(li);
    taskInput.value = "";

}

// Удаление задачи по кнопке "Удалить"
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Функция для редактирования текста задачи
function editTask(span) {
    const index = Array.from(span.parentElement.parentElement.children).indexOf(span.parentElement);
    const newNameText = prompt("Изменить задачу:", tasks[index].name);
    if (newNameText !== null && newNameText.trim() !== "") {
        tasks[index].name = newNameText.trim(); 
        span.innerText = newNameText; 
    }
}

//Завершение задачи
function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('complete');
}

//Фильтрация задач
function filterAll(){
    let li = document.querySelectorAll('li');
    li.forEach(function(all) {
        all.style.display = "block";
      });
}

function filterComplete() {
    let li = document.querySelectorAll('li');
    li.forEach(function(complete) {
        complete.style.display = "block";
        if (!complete.classList.contains('complete')) {
            complete.style.display = "none";
        }
      });
}

function filterUnfinished() {
    let li = document.querySelectorAll('li');
    li.forEach(function(unfinished) {
        unfinished.style.display = "block";
        if (unfinished.classList.contains('complete')) {
            unfinished.style.display = "none";
        }
      });
}










  