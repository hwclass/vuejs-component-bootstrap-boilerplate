# Vue + Component Example

A simple setup using [Gulp](http://gulpjs.com), [Component](http://github.com/component/component) together with [Vue.js](http://vuejs.org) for modular UI development.

Since Vue.js is itself built with Component, this is the recommended way of using Vue.js for larger scale applications. To make things more test friendly, the directives, filters and components simply export functions and definition objects without requiring Vue.js itself.

What's more important is that the components in `src/components` are completely self-contained. They include their own CSS and templates, and can also include their private directives, filters and child components. If you put a component like this on GitHub you can easily reuse them in another Vue.js project with `component install`.

## Usage

To get started, install Gulp and Component globally, then clone this repo and install local dependencies:

``` bash
$ npm install -g gulp component
$ git clone https://github.com/vuejs/vue-component-example.git
$ cd vue-component-example
$ npm install && component install
```

### Build

``` bash
$ gulp
```

Open `index.html` to see the result.

### Development

``` bash
$ gulp watch
```

This will watch files for change and re-build automatically.