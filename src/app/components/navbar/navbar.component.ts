import { BlogIconComponent } from '../../utils/icons/blog.component';
import { AddressCardComponent } from '../../utils/icons/address-card.component';
import { UserComponent } from '../../utils/icons/user.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BriefcaseComponent } from '../../utils/icons/briefcase.component';

@Component({
    selector: 'Navbar',
    standalone: true,
    imports: [
        RouterModule,
        AddressCardComponent,
        UserComponent,
        BlogIconComponent,
        BriefcaseComponent,
    ],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
