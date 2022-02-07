
let container = document.createElement("div");
container.classList.add("header-container");

let h1 = document.createElement("h1");
let h1Text = document.createTextNode("This is an h1");
h1.classList.add("h1")
h1.appendChild(h1Text);
container.appendChild(h1);

let h2 = document.createElement("h2");
let h2Text = document.createTextNode("This is an h2");
h2.classList.add("h2")
h2.appendChild(h2Text);
container.appendChild(h2);

let h3 = document.createElement("h3");
let h3Text = document.createTextNode("This is an h3");
h3.classList.add("h3")
h3.appendChild(h3Text);
container.appendChild(h3);

let h4 = document.createElement("h4");
let h4Text = document.createTextNode("This is an h4");
h4.classList.add("h4")
h4.appendChild(h4Text);
container.appendChild(h4);

let h5 = document.createElement("h5");
let h5Text = document.createTextNode("This is an h5");
h5.classList.add("h5")
h5.appendChild(h5Text);
container.appendChild(h5);

let h6 = document.createElement("h6");
let h6Text = document.createTextNode("This is an h6");
h6.classList.add("h6")
h6.appendChild(h6Text);
container.appendChild(h6);

document.addEventListener("DOMContentLoaded", () => {
    console.log("page firing");
    document.body.appendChild(container);
})

//--- Create array of colors, then when an h is clicked each time it changes to random color from array ---//

let colorArr = ["#e68e30", "#ebb434", "#734be3", "#30d0e6", "#e63f30", "#ebd16a", "#d45f35", "#2482c9"];

function randColor() {
   let pickColor = colorArr[Math.floor(Math.random() * colorArr.length)];
   return pickColor;
}
h1.addEventListener("dblclick", () => {
    let newColor = randColor();
    h1.style.color = newColor;
})
h2.addEventListener("dblclick", () => {
    let newColor = randColor();
    h2.style.color = newColor;
})
h3.addEventListener("dblclick", () => {
    let newColor = randColor();
    h3.style.color = newColor;
})
h4.addEventListener("dblclick", () => {
    let newColor = randColor();
    h4.style.color = newColor;
})
h5.addEventListener("dblclick", () => {
    let newColor = randColor();
    h5.style.color = newColor;
})
h6.addEventListener("dblclick", () => {
    let newColor = randColor();
    h6.style.color = newColor;
})

let listContainer = document.createElement("ul");
container.appendChild(listContainer);

//---Function, when called, will add a new li to the ul with text. Set x to 1 and interpolate to add values --//
let x = 1;
function newListItem() {
    let newListElement = document.createElement("li");
    listContainer.appendChild(newListElement);
   let listText = document.createTextNode(`This is list item ${(x)}`);
   newListElement.appendChild(listText);
   x += 1;

   //-- Create event listener that changes font color of a list item when single-clicked ---//
   newListElement.addEventListener("click", () => { 
    let listTextColor = randColor();
    newListElement.style.color = listTextColor;
})
//--- Create listener that removes list item when double-clicked-------//
    newListElement.addEventListener("dblclick", (e) => {
        let ul = document.querySelector("ul");
        ul.removeChild(e.target);
    })

}
//---Listener for firing newListItem when button clicked ------//
let listBtn = document.getElementById("newListItemBtn");
listBtn.addEventListener("click", newListItem);





