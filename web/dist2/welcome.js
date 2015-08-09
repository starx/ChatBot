System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var computedFrom, inject, HttpClient, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, _Welcome);

          this.heading = 'Welcome to the Chatbot';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.email = '';
          this.previousValue = this.fullName;
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            this.email = this.email;

            console.log('Welcome, ' + this.fullName + '!', '' + this.email);
            registerUser();
          }
        }, {
          key: 'registerUser',
          value: function registerUser() {
            var _this = this;

            url = '/chat/register/user';
            return this.http.jsonp(url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        var _Welcome = Welcome;
        Welcome = inject(HttpClient)(Welcome) || Welcome;
        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQUthLE9BQU8sRUFxQ1AsbUJBQW1COzs7Ozs7Ozt1Q0ExQ3hCLFlBQVk7aUNBQ1osTUFBTTs7c0NBQ04sVUFBVTs7O0FBR0wsYUFBTztpQkFBUCxPQUFPOzs7ZUFDbEIsT0FBTyxHQUFHLHdCQUF3QjtlQUNsQyxTQUFTLEdBQUcsTUFBTTtlQUNsQixRQUFRLEdBQUcsS0FBSztlQUNoQixLQUFLLEdBQUcsRUFBRTtlQUNWLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUTs7O3FCQUxsQixPQUFPOztpQkFlWixrQkFBRTtBQUNOLGdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7QUFFeEIsbUJBQU8sQ0FBQyxHQUFHLGVBQWEsSUFBSSxDQUFDLFFBQVEsYUFBUSxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUM7QUFDM0Qsd0JBQVksRUFBRSxDQUFDO1dBQ2hCOzs7aUJBRVcsd0JBQUc7OztBQUNiLGVBQUcsR0FBRyxxQkFBcUIsQ0FBQztBQUM1QixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDM0Msb0JBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3RDLENBQUMsQ0FBQztXQUNKOzs7aUJBRVkseUJBQUc7QUFDZCxnQkFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDeEMscUJBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDbkQ7V0FDRjs7O2VBdkJXLGVBQUU7QUFDWixtQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7V0FDN0M7Ozt1QkFiVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTzs7QUFxQ1AseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9