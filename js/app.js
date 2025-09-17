document.addEventListener('DOMContentLoaded', () => {
    // Task Management Elements
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const prioritySelector = document.getElementById('priority-selector');
    const priorityDropdown = document.getElementById('priority-dropdown');
    const dueDateSelector = document.getElementById('due-date-selector');
    const dueDateInput = document.getElementById('due-date');
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const submitButton = taskForm.querySelector('button[type="submit"]');

    // Settings Elements
    const themeSelectorBtn = document.getElementById('theme-selector');
    const performanceSelectorBtn = document.getElementById('performance-selector');
    const htmlElement = document.documentElement;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let selectedPriority = null;
    let editingIndex = null;

    // --- TASKS LOGIC ---
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('modern-card', 'p-4', 'flex', 'justify-between', 'items-center');
            taskElement.innerHTML = `
                <div>
                    <h3 class="font-bold">${task.title}</h3>
                    <p>${task.description}</p>
                    <span class="text-sm">Prioridad: ${task.priority || 'No asignada'}</span> |
                    <span class="text-sm">Fecha Límite: ${task.dueDate || 'No asignada'}</span>
                </div>
                <div class="flex gap-2">
                    <button class="modern-button edit-task" data-index="${index}">Editar</button>
                    <button class="modern-button delete-task" data-index="${index}">Eliminar</button>
                </div>
            `;
            taskList.appendChild(taskElement);
        });
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = taskTitleInput.value;
        const description = taskDescriptionInput.value;
        const dueDate = dueDateInput.value;

        const taskData = {
            title,
            description,
            priority: selectedPriority,
            dueDate
        };

        if (editingIndex !== null) {
            tasks[editingIndex] = taskData;
            editingIndex = null;
            submitButton.textContent = 'Agregar Tarea';
        } else {
            tasks.push(taskData);
        }

        saveTasks();
        renderTasks();
        taskForm.reset();
        selectedPriority = null;
        prioritySelector.querySelector('.selector-text').textContent = 'Prioridad';
        dueDateSelector.classList.remove('hidden');
        dueDateInput.classList.add('hidden');
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-task')) {
            const index = e.target.dataset.index;
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        } else if (e.target.classList.contains('edit-task')) {
            const index = e.target.dataset.index;
            const task = tasks[index];
            taskTitleInput.value = task.title;
            taskDescriptionInput.value = task.description;
            selectedPriority = task.priority;
            prioritySelector.querySelector('.selector-text').textContent = selectedPriority || 'Prioridad';
            dueDateInput.value = task.dueDate;

            dueDateSelector.classList.add('hidden');
            dueDateInput.classList.remove('hidden');

            editingIndex = index;
            submitButton.textContent = 'Actualizar Tarea';
        }
    });

    // Custom Priority Selector
    prioritySelector.addEventListener('click', (e) => {
        e.stopPropagation();
        priorityDropdown.classList.toggle('active');
    });

    priorityDropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('custom-dropdown-item')) {
            selectedPriority = e.target.textContent;
            prioritySelector.querySelector('.selector-text').textContent = selectedPriority;
        }
    });

    // Due Date Selector
    dueDateSelector.addEventListener('click', () => {
        dueDateSelector.classList.add('hidden');
        dueDateInput.classList.remove('hidden');
        dueDateInput.click();
    });

    // --- SETTINGS LOGIC ---
    const themes = ['palette1', 'palette2', 'palette3', 'palette4', 'palette5', 'dark'];
    const performanceModes = ['modern', 'performance'];

    let currentThemeIndex = 0;
    let currentPerformanceIndex = 0;

    const applyTheme = () => {
        const theme = themes[currentThemeIndex];
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', theme);
        }
        localStorage.setItem('theme', theme);
    };

    const applyPerformanceMode = () => {
        const mode = performanceModes[currentPerformanceIndex];
        htmlElement.setAttribute('data-performance', mode);
        localStorage.setItem('performanceMode', mode);
    };

    themeSelectorBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        applyTheme();
    });

    performanceSelectorBtn.addEventListener('click', () => {
        currentPerformanceIndex = (currentPerformanceIndex + 1) % performanceModes.length;
        applyPerformanceMode();
    });

    // Load saved settings
    const savedTheme = localStorage.getItem('theme');
    const savedPerformanceMode = localStorage.getItem('performanceMode');

    if (savedTheme) {
        currentThemeIndex = themes.indexOf(savedTheme);
        applyTheme();
    }

    if (savedPerformanceMode) {
        currentPerformanceIndex = performanceModes.indexOf(savedPerformanceMode);
        applyPerformanceMode();
    }

    // Hide dropdowns when clicking outside
    document.addEventListener('click', () => {
        priorityDropdown.classList.remove('active');
    });

    // Initial Render
    renderTasks();
});
