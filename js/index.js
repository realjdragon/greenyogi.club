(function() {
  const init = () => {
    // 처음에는 무조건 aside를 닫고 시작한다
    document.querySelector('aside').classList.remove('on');
    document.querySelector('main').classList.remove('left-half');
    document.querySelector('.main-wrapper').classList.remove('main-wrapper-left');
    console.log('init');
  };

  init();

  // // 프로젝트 창 on
  // document.querySelector('.project-item').addEventListener('click', (e) => {
  //   document.querySelector('aside').classList.toggle('on');
  //   document.querySelector('main').classList.toggle('left-half');
  //   document.querySelector('.main-wrapper').classList.toggle('main-wrapper-left');
  // });
})();