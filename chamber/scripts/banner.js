const today = new Date().getDay();

if (today <= 2) {
  const banner = document.getElementById('banner');
  banner.style.display = 'block';
  
  const closeBtn = document.getElementById('close-btn');
  
  closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
  });
}
