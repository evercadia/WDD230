document.addEventListener('DOMContentLoaded', function () {
    const mainElement = document.querySelector('main');
    const toggleButton = document.querySelector('#toggleDarkMode');

    toggleButton.addEventListener('click', function () {
        mainElement.classList.toggle('dark-mode');
    });
});
