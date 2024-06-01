import { Component, OnInit, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { SocialComponent } from '../../../components/social/social.component';
import { TitledComponent } from '../../../components/Titled';

import { GeneralService } from '../../../services/general.services';

import { GlobeComponent } from '../../../utils/icons/globe';
import { WhatsappComponent } from '../../../utils/icons/whatsapp';
import { MailComponent } from '../../../utils/icons/mail';
import { PhoneComponent } from '../../../utils/icons/phone';
import { LocationComponent } from '../../../utils/icons/location';

@Component({
    selector: 'Contact',
    standalone: true,
    imports: [
        SocialComponent,
        MailComponent,
        PhoneComponent,
        LocationComponent,
        TitledComponent,
        GlobeComponent,
        WhatsappComponent,
        NgOptimizedImage,
    ],
    templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
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
