import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { SocialComponent } from '../../components/social/social.component';
import { AvatarComponent } from '../../components/Avatar';
import { TitledComponent } from '../../components/Titled';
import { CardComponent } from '../../components/card';

import { GeneralService } from '../../services/general.services';

@Component({
    selector: 'Landing-Page',
    standalone: true,
    imports: [
        NgOptimizedImage,
        SocialComponent,
        AvatarComponent,
        TitledComponent,
        CardComponent,
    ],
    templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
    //move these set of code to the app.component.ts

    public general_services = inject(GeneralService);

    personal: any;

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
