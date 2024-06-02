let container = document.querySelector(".Element");
container.addEventListener("mouseenter",()=>{
    container.style.backgroundColor="lightgreen";
    container.style.color="black";
})
container.addEventListener("mouseleave",()=>{
    container.style.backgroundColor="black";
    container.style.color="white";
})