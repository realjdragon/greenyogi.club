'use strict';

(function () {
  const openAside = () => {
    document.querySelector('aside').classList.add('on');
    document.querySelector('main').classList.add('left-half');
    document.querySelector('.main-wrapper').classList.add('main-wrapper-left');

    // 프로젝트 창 off
    document.querySelector('aside .btn-back').addEventListener('click', (e) => {
      location.hash = '';
    });

    console.log('hash-callback');
  };

  const closeAside = () => {
    document.querySelector('aside').classList.remove('on');
    document.querySelector('main').classList.remove('left-half');
    document.querySelector('.main-wrapper').classList.remove('main-wrapper-left');
  };

  var router = new HashRouter([
      new HashRoute({ name: 'home', htmlName: 'home.html', callback: closeAside, defaultRoute: true }),            
      new HashRoute({ name: 'manbo', htmlName: 'manbo.html', callback: openAside }),
      new HashRoute({ name: 'saboten', htmlName: 'saboten.html', callback: openAside })
  ]);
}());