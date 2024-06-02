let lists=document.querySelectorAll(".list")
let rightBox=document.querySelector(".box2")
let leftBox=document.querySelector(".box1")

for(l of lists){
    l.addEventListener("dragstart",function(e){

        let selected=e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })

        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selected);
            selected="";
        })

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })

        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selected);
            selected="";
        })

    })
}
