var Vue = require('vue')

Vue.config({

    // prefix for directives
    prefix: 'app',

    // log debug info
    debug: false,

    // suppress warnings
    silent: false,

    // CSS class attached for entering transition
    enterClass: 'v-enter',

    // CSS class attached for leaving transition
    leaveClass: 'v-leave',

    // Interpolate mustache bindings
    interpolate: true,

    // Interpolation delimiters
    // default value translates to {{ }} and {{{ }}}
    delimiters: ['{', '}']

});

new Vue({

    el: 'body',

    directives: {
        flip: require('./directives/flip')
    },

    filters: {
        reverse: require('./filters/reverse')
    },

    components: {
        navbar : require('navbar'),
        main: require('main'),
        footer : require('footer')
    },

    methods : {},

    data: {
        projectTitle: 'The Project',
        menuItems : [
        	{text : 'Home', link : '#home', className : 'active'},
        	{text : 'About', link : '#about', className : ''},
        	{text : 'Contact', link : '#contact', className : ''}
        ],
        containerContent : {
        	h1 : 'Bootstrap starter template',
        	p : 'Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document.'
        },
        currentView : 'main'
    }
});