document.querySelector('.project-item').addEventListener('click', (e) => {
  document.querySelector('aside').classList.toggle('on');
});

document.querySelector('aside .btn-close').addEventListener('click', (e) => {
  document.querySelector('aside').classList.toggle('on');
  location.hash = '';
});