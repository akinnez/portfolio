import { Component, input, output } from '@angular/core';
import { XComponent } from '../utils/icons/x.component';

@Component({
    selector: 'Modal',
    imports: [XComponent],
    standalone: true,
    template: `
        <div
            class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
            <div
                class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg {{
                    styles()
                }}"
            >
                <div
                    class="absolute right-4 top-4 rounded-sm  transition-opacity cursor-pointer focus:outline-none disabled:pointer-events-none data-[state=open]:bg-background data-[state=open]:text-foreground"
                    (click)="onOpenChanges()"
                >
                    <X styles="h-4 w-4 fill-background" />
                    <span class="sr-only">Close</span>
                </div>

                <div
                    class="rounded-t-md bg-foreground text-background px-4 py-7 font-bold"
                >
                    {{ header() }}
                </div>
                <ng-content />
            </div>
        </div>
    `,
})
export class ModalComponent {
    header = input<string>();
    styles = input<string>();
    onOpenChange = output();

    onOpenChanges() {
        this.onOpenChange.emit();
    }
}
