import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'Avatar',
    standalone: true,
    imports: [NgOptimizedImage],
    template: `
        <img
            ngSrc="{{ link() }}"
            alt="{{ name() }}"
            width="{{ width() }}"
            height="{{ height() }}"
            priority
            class="{{ styles() }}"
        />
    `,
})
export class AvatarComponent {
    styles = input<string>();
    link = input<string>();
    name = input<string>();
    width = input();
    height = input();
}
