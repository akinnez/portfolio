import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarTopComponent } from './components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, NavbarTopComponent],
    template: `
        <Top-Nav />
        <Navbar />
        <div class="container px-3 pb-24 lg:px-20 xl:px-32 lg:pb-0">
            <router-outlet />
        </div>
    `,
})
export class AppComponent {}
