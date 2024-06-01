import { Component, input } from '@angular/core';

@Component({
    selector: 'Button',
    standalone: true,
    template: `
        <button
            class="py-3 px-4 border-2 border-foreground rounded-2xl hover:text-background hover:bg-foreground {{
                styles()
            }}"
        >
            <ng-content />
        </button>
    `,
})
export class ButtonComponent {
    styles = input<string>();
}
