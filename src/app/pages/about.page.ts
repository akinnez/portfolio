import AboutComponent from '../views/personals/about/about.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [AboutComponent],
    template: ` <About /> `,
})
export default class aboutPageComponent {}
