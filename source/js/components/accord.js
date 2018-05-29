// features section accordion
const accord = (element) => {
  const acc = document.getElementsByClassName(element);
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle(`${element}-is--active`);
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }
};