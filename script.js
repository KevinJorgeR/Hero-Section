const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const elementsToToggle = document.querySelectorAll('.light-element, .dark-element');
    elementsToToggle.forEach(element => {
        element.classList.toggle('light-element');
        element.classList.toggle('dark-element');
    });
});

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateDarkMode();
});

function updateDarkMode() {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.classList.add('light-element');
        darkModeToggle.classList.remove('dark-element');
        darkModeToggle.textContent = 'Modo Claro';
        darkModeToggle.style.backgroundColor = 'white';
        darkModeToggle.style.color = 'black';
        darkModeToggle.style.fontWeight = 'bold';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.classList.add('dark-element');
        darkModeToggle.classList.remove('light-element');
        darkModeToggle.textContent = 'Modo Oscuro';
        darkModeToggle.style.backgroundColor = '';
        darkModeToggle.style.color = '';
    }
}








