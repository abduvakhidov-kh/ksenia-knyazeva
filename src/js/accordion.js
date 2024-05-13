const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.parentElement.querySelector(".panel");
    const icon = this.querySelector(".icon");

    console.log(icon, !icon);
    
    togglePanel(panel);
    toggleIcon(icon, panel);
  });
}

function togglePanel(panel) {
  if (!panel) return;
  
  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } else {
    panel.style.maxHeight = null;
  }
}

function toggleIcon(icon, panel) {
  console.log(panel);
  if (!icon) return;

  console.log(panel, 'asd');

  if (!panel.style.maxHeight) {
    icon.innerHTML = `<line x1="12" y1="1" x2="12" y2="23" style="stroke: #000; stroke-width: 1" /><line x1="1" y1="12" x2="23" y2="12" style="stroke: #000; stroke-width: 1" />`;
  } else {
    icon.innerHTML = `<line x1="1" y1="12" x2="23" y2="12" style="stroke: #000; stroke-width: 1" />`;
  }
}
