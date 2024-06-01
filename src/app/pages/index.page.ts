import { LandingPageComponent } from '../views/landing-page/landing-page.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [LandingPageComponent],
    template: `<Landing-Page />`,
})
export default class HomeComponent {}
