const scrollDown = () => {
  window.scrollTo({
    top: document.querySelector("#projects").offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

export default scrollDown;
