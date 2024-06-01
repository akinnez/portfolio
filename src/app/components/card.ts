import { Component, input } from '@angular/core';

@Component({
    selector: 'Card',
    standalone: true,
    template: `
        <div class="shadow shadow-foreground w-full {{ styles() }}">
            <ng-content />
        </div>
    `,
})
export class CardComponent {
    styles = input<string>();
}
