import { Component, input } from '@angular/core';

import { twitterComponent } from '../../utils/icons/twitter';
import { FacebookComponent } from '../../utils/icons/facebook';
import { YoutubeComponent } from '../../utils/icons/youtube';
import { GithubComponent } from '../../utils/icons/github';
import { LinkedinComponent } from '../../utils/icons/linkedin';

@Component({
    selector: 'Socials',
    standalone: true,
    imports: [
        FacebookComponent,
        twitterComponent,
        YoutubeComponent,
        GithubComponent,
        LinkedinComponent,
    ],
    templateUrl: './social.component.html',
})
export class SocialComponent {
    styles = input<string>();
    text_needed = input<boolean>(false);
    social = input.required();
}
