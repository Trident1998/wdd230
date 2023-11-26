const today = new Date().getDay();

if (today > 0 && today <= 3) {
  const banner = document.getElementById('banner');
  banner.style.display = 'block';
  
  const closeBtn = document.getElementById('close-btn');
  
  closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
  });
}
