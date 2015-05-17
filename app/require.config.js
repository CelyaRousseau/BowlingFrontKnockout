// require.js looks for the following global when initializing
var require = {
    baseUrl: '.',

    packages: [
        { name: 'when', location: 'bower_components/when/', main: 'when' },

    ],

    shim: {
        "crossroads.min": { exports: "crossroads"},
        "bootstrap" : { "deps" :['jquery'] },
    },

    paths: {
        knockout:   'public/js/knockout-3.3.0',
        domReady:   'public/js/domReady',
        jquery:     'public/js/jquery-2.1.4.min',
        text:       'public/js/text',
        hasher:     'node_modules/hasher/dist/js/hasher',
        signals:    'node_modules/crossroads/node_modules/signals/dist/signals',
        crossroads: 'node_modules/crossroads/dist/crossroads',
        bootstrap:  'bower_components/bootstrap/dist/js/bootstrap.min',
        lodash:     'bower_components/lodash/lodash.min',
        http:       'node_modules/http/',
        sys:        'node_modules/sys/sys',
        amqp:       'node_modules/amqp/amqp',
        path :      'bower_components/path/path',
        listener :  'app/listener',
        socket:     'node_modules/socket.io/index',
    },

};