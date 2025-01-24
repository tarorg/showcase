// src/filter.js
export function filterShots(tag) {
    const shots = document.querySelectorAll('.shot');
    shots.forEach(shot => {
      if (tag === 'all' || shot.classList.contains(tag)) {
        shot.style.display = 'block';
      } else {
        shot.style.display = 'none';
      }
    });
  }