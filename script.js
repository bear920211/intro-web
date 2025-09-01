function toggleResume() {
  const section = document.getElementById("resumeSection");
  const button = document.querySelector(".cta");
  const isHidden = section.style.display === "none" || section.style.display === "";

  section.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "收起履歷" : "更多的我";
}
