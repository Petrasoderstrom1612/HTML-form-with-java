/* ...........Questions
const panelBtn1 = document.getElementById("panelBtn1");
const panelBtn2 = document.querySelector("#secondaryPanelBtn");
const panelBtn3 = document.getElementById("testPanelBtn");

..............Answers
const panel1 = document.querySelector("#panel1");
const panel2 = document.querySelector("#panel2");
const panel3 = document.querySelector("#panel3");

panelBtn1.addEventListener("click", () => {
  window.alert("Hello World");
  panel1.classList.toggle("active");
});
panelBtn2.addEventListener("click", () => {
  window.alert("Hello World");
  panel2.classList.toggle("active");
});
panelBtn3.addEventListener("click", () => {
  window.alert("Hello World");
  panel3.classList.toggle("active");
}); */

function toggle() {
  this.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;
document.getElementById("section5").onclick = toggle;
