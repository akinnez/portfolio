import { Component, input, OnInit, output, signal } from '@angular/core';
import { CardComponent } from '../card';
import { AvatarComponent } from '../Avatar';
import { TitledComponent } from '../Titled';
import { StatusComponent } from '../../utils/icons/statusbar';
import { portfolioType } from '../../utils/types';
import { RatingStarComponent } from '../ratingStar.component';

@Component({
    selector: 'Sliced',
    standalone: true,
    imports: [
        CardComponent,
        AvatarComponent,
        TitledComponent,
        StatusComponent,
        RatingStarComponent,
    ],
    templateUrl: './sliced.component.html',
})
export class SlicedComponent implements OnInit {
    className = input<string>('');
    portfolio = input<portfolioType[]>([]);
    category = input<string>();
    openRatings = output();
    portfolioValue = signal<portfolioType[]>([]);

    constructor() {
        this.portfolioValue.update((value) => this.portfolio());
    }
    ngOnInit() {
        this.portfolioValue.update(() => this.portfolioSlice(this.portfolio()));
    }
    portfolioSeeMore() {
        this.portfolioValue.update((value) => this.portfolio());
    }
    portfolioSeeLess() {
        this.portfolioValue.update(() =>
            this.portfolioSlice(this.portfolioValue())
        );
    }

    portfolioSlice(portfolio: portfolioType[]) {
        return portfolio.slice(0, 6);
    }
    openRatingsModal(idx: number, category: string) {
        const value: any = {
            index: idx,
            category,
        };
        this.openRatings.emit(value);
    }
}
