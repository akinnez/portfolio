import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from '../Avatar';

@Component({
    selector: 'Top-Nav',
    standalone: true,
    imports: [NgOptimizedImage, RouterModule, AvatarComponent],
    template: `
        <a routerLink="/">
            <div
                class="container bg-transparent w-full px-3 lg:px-32 flex items-center"
            >
                <Avatar
                    link="/welcome-removebg-preview.png"
                    name="logo"
                    width="100"
                    height="100"
                />
                <h1 class="text-xl font-semibold italic">Akinnez</h1>
            </div>
        </a>
    `,
})
export class NavbarTopComponent {}
