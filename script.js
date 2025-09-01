function showIntro() {
  const intro = document.getElementById('jobIntro');
  const isHidden = intro.style.display === 'none' || intro.style.display === '';
  intro.style.display = isHidden ? 'block' : 'none';
  if (isHidden) {
    intro.scrollIntoView({ behavior: 'smooth' });
  }
}
