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
