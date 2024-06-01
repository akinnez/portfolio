import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatarComponent } from '../../../components/Avatar';
import { TitledComponent } from '../../../components/Titled';
import { ContentOverflowComponent } from '../../../components/content-overflow';
import { CardComponent } from '../../../components/card';
import { ButtonComponent } from '../../../components/button';

import { GeneralService } from '../../../services/general.services';
@Component({
    selector: 'About',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterModule,
        AvatarComponent,
        TitledComponent,
        CardComponent,
        ButtonComponent,
        ContentOverflowComponent,
    ],
    templateUrl: './about.component.html',
})
export default class AboutComponent {
    personal: any;
    general_services = inject(GeneralService);

    ngOnInit() {
        if (this.general_services.cache) {
            this.personal = this.general_services.cache;
        } else {
            this.getInfo();
        }
    }

    getInfo() {
        let sub = this.general_services.getPersonalInfo().subscribe({
            next: (res) => {
                if (res) {
                    this.personal = res;
                    sessionStorage.setItem('memoize', JSON.stringify(res));
                }
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                sub.unsubscribe();
            },
        });
    }
}
