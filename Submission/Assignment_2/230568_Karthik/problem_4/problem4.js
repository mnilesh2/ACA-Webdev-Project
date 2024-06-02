function changeBackgroundColorOnHover(element, color) {
    element.addEventListener('mouseenter', function() {
        element.style.backgroundColor = color;
    });

    element.addEventListener('mouseleave', function() {
        element.style.backgroundColor = '';
    });
}

    const myElement = document.getElementById("my-element");
    changeBackgroundColorOnHover(myElement, 'blue');