document.getElementById("toggleResume").addEventListener("click", function () {
  const section = document.getElementById("resumeSection");
  section.style.display = section.style.display === "none" ? "flex" : "none";
  this.textContent = section.style.display === "none" ? "查看履歷" : "收起履歷";
});
