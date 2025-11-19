console.log("Hello from the external script!");

function sayHello() {
  alert("Hello from the external file!");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

function sayGb() {
  alert("Goodnight from the external file!");
}

// Connect the function to the button
let btn2 = document.getElementById("goodnightBtn");
btn2.addEventListener("click", sayGb);