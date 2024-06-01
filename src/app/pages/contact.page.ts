import { ContactComponent } from '../views/personals/contact/contact.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ContactComponent],
    template: ` <Contact /> `,
})
export default class ContactPageComponent {}
