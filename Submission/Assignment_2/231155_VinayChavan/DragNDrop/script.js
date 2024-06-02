let container = document.querySelector("#sortlist")
function reorder () {
    // (A) SET CSS + GET ALL LIST ITEMS
    console.log(container)
    container.classList.add("box");
    let items = container.getElementsByTagName("li"), current = null;
    console.log(items)
  
    //  MAKING ITEMS DRAGGABLE + RE-ORDERING
    for (let i of items) {
      //  ATTACH DRAGGABLE ATTRIBUTE AS TRUE
      i.draggable = true;
      
      //ON DRAG START - ALL BOXES EXCEPT ONE WHICH IS BEING DRAGGED GETS 'HINT' CLASS WHICH STYLES THEM
      i.ondragstart = e => {
        current = i;
        console.log(current)
        for (let it of items) {
          if (it != current) { it.classList.add("hint"); }
        }
      };
      
      
      //ON DRAG ENTER - ADDS 'ACTIVE' CLASS FOR STYLING
      i.ondragenter = e => {
        if (i != current) { i.classList.add("active"); }
      };
  
      //ON DRAG LEAVE - REMOVE STYLES FROM 'ACTIVE'
      i.ondragleave = () => i.classList.remove("active");
  
      // DRAG END - REMOVE ALL STYLES
      i.ondragend = () => { for (let it of items) {
          it.classList.remove("hint");
          it.classList.remove("active");
      }};
   
      //ON DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
      i.ondragover = e => e.preventDefault();
   
      // ON DROP - RE-ORDER HERE CURRENT HAS THE ELEMENT DRAGGED AND 'i' IS THE DROP TARGET
      i.ondrop = e => {
        e.preventDefault();
        console.log(i)
        if (i != current) {
          let currentpos = 0, droppedpos = 0;
          for (let it=0; it<items.length; it++) {
            if (current == items[it]) { currentpos = it; }
            if (i == items[it]) { droppedpos = it; }
          }
          console.log(i.parentNode)
          if (currentpos < droppedpos) {
            container.insertBefore(current, i.nextSibling);
          } else {
            container.insertBefore(current, i);
          }
        }
      };
    }
  }
  reorder(document.getElementById("sortlist"));