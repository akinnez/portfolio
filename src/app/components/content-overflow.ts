import { Component, input } from '@angular/core';

@Component({
    selector: 'Overflow',
    standalone: true,
    template: `
        <div
            class="w-full bg-background text-foreground lg:flex lg:items-center p-5 overflow-x-scroll lg:overflow-hidden"
        >
            <div class="{{ styles() }} flex w-full">
                <ng-content />
            </div>
        </div>
    `,
})
export class ContentOverflowComponent {
    styles = input<string>();
}
