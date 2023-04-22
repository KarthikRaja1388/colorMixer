let color1ElementNode = document.querySelector("#color1");
let color2ElementNode = document.querySelector("#color2");
let body = document.body;
let error = document.querySelector(".error");

color1ElementNode.addEventListener("change", () => {
  changeColor();
});

color2ElementNode.addEventListener("change", () => {
  changeColor();
});

function changeColor() {
  error.innerHTML = "";
  let color1 = color1ElementNode.value;
  let color2 = color2ElementNode.value;

  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          body.style.backgroundColor = "purple";
          break;
        case "yellow":
          body.style.backgroundColor = "orange";
          break;
        default:
          if (color1 === color2) {
            error.innerHTML = "Invalid color combination.";
            body.style.backgroundColor = "transparent";
          }
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          body.style.backgroundColor = "purple";
          break;
        case "yellow":
          body.style.backgroundColor = "green";
          break;
        default:
          error.innerHTML = "Invalid color combination.";
          if (color1 === color2) {
            error.innerHTML = "Invalid color combination.";
            body.style.backgroundColor = "transparent";
          }
      }
      break;

    default:
      error.innerHTML = "Invalid color combination.";
      body.style.backgroundColor = "transparent";
  }
}
