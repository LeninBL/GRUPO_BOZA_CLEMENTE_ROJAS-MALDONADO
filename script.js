// Icon clicks
document.querySelectorAll('.icon-bar i').forEach(icon => {
    icon.addEventListener('click', () => {
      alert(`Has hecho clic en: ${icon.title}`);
    });
  });
  
  // Clear button
  document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('volumeForm').reset();
  });
  
  // Color controls
  const rRange = document.getElementById('rRange');
  const gRange = document.getElementById('gRange');
  const bRange = document.getElementById('bRange');
  
  const rValue = document.getElementById('rValue');
  const gValue = document.getElementBy
  