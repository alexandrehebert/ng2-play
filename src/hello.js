import {ComponentAnnotation as Component, ViewAnnotation as View, Event, NgIf as If, bootstrap, bind} from 'angular2/angular2';
import {routerInjectables, RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';
import {Route1, Route2} from 'routes';

@Component({
    selector: 'hello'
})
@View({
    template: `
        <h1 *ng-if="name">Hello, {{name}}!</h1>

        <ul>
            <li router-link="route1">Page 1</li>
            <li router-link="route2">Page 2</li>
        </ul>

        <router-outlet></router-outlet>
    `,
    directives: [If, RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/', component: Route1},
    {path: '#/route1', component: Route1, as: 'route1'},
    {path: '#/route2', component: Route2, as: 'route2'}
])
export class Hello {
    name:string = 'World';

    constructor() {
        setTimeout(() => {
            this.name = 'NEW World'
        }, 2000);
    }
}

bootstrap(Hello, [routerInjectables]);
