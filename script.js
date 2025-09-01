function toggleResume() {
  const section = document.getElementById("resumeSection");
  const button = document.getElementById("toggleResume");
  const isHidden = !section.classList.contains("show");

  if (isHidden) {
    section.classList.add("show");
    button.textContent = "收起履歷";
  } else {
    section.classList.remove("show");
    button.textContent = "更多的我";
  }
}
