(function() {
  // 프로젝트 창 on
  document.querySelector('.project-item').addEventListener('click', (e) => {
    document.querySelector('aside').classList.toggle('on');
    document.querySelector('main').classList.toggle('left-half');
    document.querySelector('.main-wrapper').classList.toggle('main-wrapper-left');
  });
  
  // 프로젝트 창 off
  document.querySelector('aside .btn-back').addEventListener('click', (e) => {
    document.querySelector('aside').classList.toggle('on');
    document.querySelector('main').classList.toggle('left-half');
    document.querySelector('.main-wrapper').classList.toggle('main-wrapper-left');
    location.hash = '';
  });

  document.querySelector('main').addEventListener('scroll', (e) => {
    console.log(e);
  });
})();