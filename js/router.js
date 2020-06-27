'use strict';

function HashRouter(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

HashRouter.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        // 내용을 꽂아넣을 곳
        this.rootElem = document.querySelector('aside');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        // 아랫줄을 지우면 그냥 주소로 접근했을때 컨텐츠가 안 채워지네?
        // hash가 안 바뀌었으니까 그렇겠지~
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        const hash = window.location.hash;
        console.log(hash);
        // 해쉬가 붙어있으면
        if (hash.length > 0) {
            const activeRoutes = r.filter(route => route.isActiveRoute(hash.substr(1)));
            if (activeRoutes.length > 0) {
                scope.goToRoute(activeRoutes[0].htmlName, activeRoutes[0].callback);
                return;
            }
        }
        
        const defaultRoutes = r.filter(route => route.default);
        if (defaultRoutes.length > 0) {
            scope.goToRoute(defaultRoutes[0].htmlName, defaultRoutes[0].callback);
        } else {
            scope.goToRoute(r[0].htmlName, r[0].callback);
        }
    },
    goToRoute: function (htmlName, callback) {
        (function(scope) { 
            var url = 'views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                    callback();
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};