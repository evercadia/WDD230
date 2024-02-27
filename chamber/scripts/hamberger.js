const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

// Close the menu if a navigation link is clicked
navigation.addEventListener('click', () => {
    navigation.classList.remove('show');
    hamButton.classList.remove('show');
});
