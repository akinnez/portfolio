import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-blog-component',
    standalone: true,
    imports: [RouterOutlet, NgOptimizedImage],
    template: `
        <div
            class=" flex flex-col xl:flex-row justify-center items-center h-svh"
        >
            <img
                ngSrc="/welcome-removebg-preview.png"
                alt="welcome"
                width="451"
                height="346"
                priority
            />
            <p class="text-6xl text-center font-bold">COMING SOON</p>
        </div>
    `,
})
export default class BlogPageComponentComponent {
    constructor() {}
}
