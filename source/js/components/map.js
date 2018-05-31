export const coverage = () => {
  //map elements
  const elements = {
    mapList : document.querySelector('.map__nav-link-list')
  };

  elements.mapList.addEventListener("click",  (e) => {
    e.preventDefault();
    console.log();
    elements.mapList.classList.toggle("-is--active");
  })
};