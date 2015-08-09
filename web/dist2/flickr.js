System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, Flickr;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Flickr = (function () {
        function Flickr(http) {
          _classCallCheck(this, _Flickr);

          this.heading = 'Flickr';
          this.images = [];
          this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

          this.http = http;
        }

        _createClass(Flickr, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.jsonp(this.url).then(function (response) {
              _this.images = response.content.items;
            });
          }
        }]);

        var _Flickr = Flickr;
        Flickr = inject(HttpClient)(Flickr) || Flickr;
        return Flickr;
      })();

      _export('Flickr', Flickr);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBSWEsTUFBTTs7Ozs7Ozs7aUNBSlgsTUFBTTs7c0NBQ04sVUFBVTs7O0FBR0wsWUFBTTtBQUtOLGlCQUxBLE1BQU0sQ0FLTCxJQUFJLEVBQUM7OztlQUpqQixPQUFPLEdBQUcsUUFBUTtlQUNsQixNQUFNLEdBQUcsRUFBRTtlQUNYLEdBQUcsR0FBRyw4RkFBOEY7O0FBR2xHLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOztxQkFQVSxNQUFNOztpQkFTVCxvQkFBRTs7O0FBQ1IsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoRCxvQkFBSyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1dBQ0o7OztzQkFiVSxNQUFNO0FBQU4sY0FBTSxHQURsQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJmbGlja3IuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9