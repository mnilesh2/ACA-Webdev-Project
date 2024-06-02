let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(let i=0; i<lists.length; i++){
    lists[i].addEventListener("dragstart",function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop",function(e){
            if (e.target.className === 'list') {
                const rect = e.target.getBoundingClientRect();
                const offset = e.clientY - rect.top;
                if (offset > e.target.offsetHeight / 2) {
                    e.target.parentNode.insertBefore(selected, e.target.nextSibling);
                } else {
                    e.target.parentNode.insertBefore(selected, e.target);
                }
            } else {
                e.target.appendChild(selected);
            }
            selected = null;
        })

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop",function(e){
            e.preventDefault();
            if (e.target.className === 'list') {
                const rect = e.target.getBoundingClientRect();
                const offset = e.clientY - rect.top;
                if (offset > e.target.offsetHeight/2 ) {
                    e.target.parentNode.insertBefore(selected, e.target.nextSibling);
                } else {
                    e.target.parentNode.insertBefore(selected, e.target);
                }
            } else {
                e.target.appendChild(selected);
            }
            selected = null;
        })
    })
}