import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarTopComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponent,
        FooterComponent,
        NavbarTopComponent,
    ],
    template: `
        <Top-Nav />
        <Navbar />

        <div class="container px-3 pb-24 lg:px-20 xl:px-32 lg:pb-0">
            <router-outlet />
            <Footer></Footer>
        </div>
    `,
})
export class AppComponent {}
