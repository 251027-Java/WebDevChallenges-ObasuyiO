console.log("Hello from the external script!");


const list = document.getElementById("myList");
const button = document.getElementById("addBtn");

button.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
});



