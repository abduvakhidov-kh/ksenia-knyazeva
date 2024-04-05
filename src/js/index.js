// accordion logic
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    const icon = this.querySelector('.icon');
    if (panel.style.maxHeight) {
      icon.innerHTML = `<line x1="12" y1="1" x2="12" y2="23" style="stroke: #000; stroke-width: 1" />
        <line x1="1" y1="12" x2="23" y2="12" style="stroke: #000; stroke-width: 1" />`;
      panel.style.maxHeight = null;
    } else {
      icon.innerHTML = `<line x1="1" y1="12" x2="23" y2="12" style="stroke: #000; stroke-width: 1" />`;
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// variant colors logic product page
let colorItems = document.querySelectorAll('.color__item');

colorItems.forEach(function(colorItem) {
  let dataColor = colorItem.getAttribute('data-color');
  colorItem.style.backgroundColor = dataColor;
});

// tabs logic
document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", function() {
      const tabId = button.getAttribute("data-tab");

      // Hide all tab contents
      tabContents.forEach(content => {
        content.style.display = "none";
      });

      // Remove active class from all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      // Show the selected tab content
      document.getElementById(tabId).style.display = "block";

      // Add active class to the clicked button
      button.classList.add("active");
    });
  });
});

