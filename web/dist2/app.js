System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Chatbot';
            config.options.root = '/';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' }, { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDMUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFPLFFBQVEsRUFBRSxXQUFXLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ3ZHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUSxJQUFJLEVBQUUsUUFBUSxFQUFRLFFBQVEsRUFBRSxVQUFVLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLEVBQ3RHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDN0csQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWFUsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==