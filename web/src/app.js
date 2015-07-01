import 'foundation';
import 'foundation/css/foundation.css!';
import 'foundation/js/foundation/foundation.topbar';
import 'foundation/js/foundation/foundation.reveal';

export class App {
  configureRouter(config, router){
    config.title = 'Chatbot';
    config.options.root = '/';
    config.map([
      { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',       name: 'flickr',       moduleId: './flickr',       nav: true, title:'Flickr' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
