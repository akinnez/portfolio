import { BlogIconComponent } from '../../utils/icons/blog.component';
import { AddressCardComponent } from '../../utils/icons/address-card.component';
import { UserComponent } from '../../utils/icons/user.component';
import { HomeComponent } from '../../utils/icons/home';
import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BriefcaseComponent } from '../../utils/icons/briefcase.component';

@Component({
    selector: 'Navbar',
    standalone: true,
    imports: [
        RouterModule,
        AddressCardComponent,
        UserComponent,
        HomeComponent,
        BlogIconComponent,
        BriefcaseComponent,
    ],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    location = inject(Router);
    currentUrl = signal('');

    constructor() {
        this.location.events.subscribe((_: any) => {
            if (_ instanceof NavigationEnd) {
                this.currentUrl.update(() => _.url);
            }
        });
    }
}
