// Add a click event listener to a button with the ID 'myButton'
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Hello, welcome to my website!');
        });
    }
});
