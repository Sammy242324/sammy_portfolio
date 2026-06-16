const yearElement = document.getElementById("currentYear");
const revealElements = document.querySelectorAll(".reveal");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
  });
}
