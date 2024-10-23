import { Component } from '@angular/core';

@Component({
    selector: 'Footer',
    standalone: true,
    template: `
        <div class="py-7 flex justify-center">
            <div class="text-center lg:text-lg font-bold">
                ©️ 2024{{ ' ' }}
                @if(date.getFullYear() > 2024){
                <span class="text-center lg:text-lg font-bold">
                    - {{ date.getFullYear() }}</span
                >
                }. {{ ' ' }} Akinnez Technical Solution
            </div>
        </div>
    `,
})
export class FooterComponent {
    date = new Date();
}
