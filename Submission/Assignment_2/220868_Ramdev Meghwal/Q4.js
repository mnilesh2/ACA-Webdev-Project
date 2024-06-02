function changeBackgroundColorOnHover(elementId, newColor, originalColor) {
    var element = document.getElementById("box");
    
    // Storing the original color
    var originalBackgroundColor = element.style.backgroundColor;
    
    // Changing background color when mouse enters
    element.addEventListener("mouseenter", function() {
        element.style.backgroundColor = newColor;
    });

    // Revert back to original color when mouse leaves
    element.addEventListener("mouseleave", function() {
        element.style.backgroundColor = originalBackgroundColor;
    });
}


changeBackgroundColorOnHover("box", "red", "grey");
