import { Component, signal } from '@angular/core';
import { RatingStarComponent } from '../ratingStar.component';
import { RatingsFormComponent } from './ratingsForm/ratingsForm.component';

@Component({
    selector: 'Ratings',
    standalone: true,
    imports: [RatingStarComponent, RatingsFormComponent],
    templateUrl: './ratings.component.html',
})
export class RatingsComponent {
    public ratings = signal<any>(null);
    constructor() {}

    ratingValue(value: number) {
        this.ratings.update(() => value);
    }
}
