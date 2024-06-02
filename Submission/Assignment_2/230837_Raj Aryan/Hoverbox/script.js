let box = document.querySelector("div");
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "grey";
});
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "white";
});
