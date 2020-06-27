'use strict';

(function () {
  const projectSlide = document.querySelector('.project-slide');
  const mainWrapper = document.querySelector('.main-wrapper');

  const openAside = () => {
    projectSlide.classList.add('on');
    mainWrapper.classList.add('project-on');

    console.log('openAside!');

    // 프로젝트 창 off
    document.querySelector('.project-slide .btn-back').addEventListener('click', (e) => {
      location.hash = '';
    });
  };

  const closeAside = () => {
    projectSlide.classList.remove('on');
    mainWrapper.classList.remove('project-on');
  };

  var router = new HashRouter([]);

  router.get('', closeAside);

  router.get('manbo', () => {
    var url = "views/manbo.html",
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        projectSlide.innerHTML = this.responseText;
        openAside();
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });

  router.get('saboten', () => {
    var url = "views/saboten.html",
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        projectSlide.innerHTML = this.responseText;
        openAside();
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });

  router.init();
}());