
let element = document.querySelector('div');
element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "rgb(169, 142, 226)";
    element.style.color = "black";
});
element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = "rgb(58, 27, 124)";
    element.style.color = "rgb(187, 241, 243)";
});
