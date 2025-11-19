console.log("Hello from the external script!");

function greetUser() {
  let name = document.getElementById("nameInput").value;
  let color = document.getElementById("nameInput").value;
  if (name.trim() === "" && color.trim() === "") {
    alert("Please enter your name and fav color first!");
  } else {
    alert("Hello, " + name + "!" + " Your favorite color is " + color + ".");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);


