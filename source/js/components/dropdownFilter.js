export const dropdownFilter = element => {
  const dropdown = document.getElementsByClassName(element);
  let i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].onclick = function() {
      const items = document.querySelectorAll('.filter__item');
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