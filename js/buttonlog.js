const btn = document.getElementById('submitBtn');
  btn.addEventListener('click', () => {
    const count = parseInt(localStorage.getItem('clickCount')) || 0;
    localStorage.setItem('clickCount', count + 1);
  });