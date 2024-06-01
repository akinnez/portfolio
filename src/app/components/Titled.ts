import { Component, input } from '@angular/core';

@Component({
    selector: 'Titled',
    standalone: true,
    template: `
        <h1 class="{{ styles() }}">
            {{ content() }}
        </h1>
    `,
})
export class TitledComponent {
    styles = input<string>();
    content = input<string>();
}
