import {
    Component,
    computed,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { StarComponent } from '../utils/icons/star.component';
import { HalfStarComponent } from '../utils/icons/halfStar.component';

@Component({
    selector: 'RatingStar',
    standalone: true,
    imports: [StarComponent, HalfStarComponent],
    template: `
        <div class="flex {{ styles() }}">
            @for(arr of arrayOfFive(); track arr; let idx = $index){

            <label>
                <input
                    class="hidden cursor-pointer"
                    type="radio"
                    [disabled]="ratingStar()"
                    name="rating"
                    [value]="idx + 1"
                    (click)="ratingsNumber(idx + 1)"
                />

                <Star
                    className="h-4 w-4 {{
                        idx + 1 <= rating()
                            ? 'fill-tertiary'
                            : 'fill-neutral-html'
                    }} {{ starStyles() }}"
                />
            </label>
            }
        </div>
    `,
})
export class RatingStarComponent implements OnInit {
    styles = input<string>('');
    starStyles = input<string>('');
    ratingStar = input<string | null>(null);
    ratingValue = output();

    rating = signal<number>(0);
    arrayOfFive = computed(() => new Array(5));

    constructor() {}

    ngOnInit(): void {
        if (this.ratingStar() != null) {
            this.rating.update(
                (value) => (value = Math.round(Number(this.ratingStar())))
            );
        }
    }

    ratingsNumber(r: any) {
        const newRating = r === this.rating ? null : r;
        this.rating.update(() => newRating);
        this.ratingValue.emit(newRating);
    }
}
