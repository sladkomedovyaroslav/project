function fadeIn(element) {
  let opacity = 0;
  function animate() {
    opacity += 0.05;
    element.style.opacity = opacity;
    if (opacity < 1) requestAnimationFrame(animate);
  }
  element.style.opacity = 0;
  animate();
}
