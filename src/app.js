import {Router} from 'aurelia-router';
import {Behaviore} from 'aurelia-framework';

export class App {


    static inject() { return [Router, Element]; }


    constructor(router) {

        this.router = router;
        this.router.configure(
            config => {

                config.title = 'Aurelia';
                config.map([

                    { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
                    { route: 'flickr',        moduleId: 'flickr',       nav: true },
                    { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' },
                    { route: 'buttons-demo',  moduleId: 'buttons-demo', nav: true, title: 'Buttons Demo' }

                ]);


            });


    }


}
