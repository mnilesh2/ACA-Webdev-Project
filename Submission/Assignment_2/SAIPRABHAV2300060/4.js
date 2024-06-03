document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('12');

    function changeBackgroundColor(event) {
        event.target.style.backgroundColor = '#28a745'; // Change to desired color on mouse enter
    }

    function resetBackgroundColor(event) {
        event.target.style.backgroundColor = '#e74c3c'; // Reset to original color on mouse leave
    }

    colorBox.addEventListener('mouseenter', changeBackgroundColor);
    colorBox.addEventListener('mouseleave', resetBackgroundColor);
});

