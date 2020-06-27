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
    routes: [],
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
        
        for (let i = 0; i < r.length; i++) {
            if (r[i].uri === hash.substr(1)) {
                r[i].callback();
            }
        }
    },
    get: function (uri, callback) {
        const route = {
            uri,
            callback
        };
        this.routes.push(route);
    }
};