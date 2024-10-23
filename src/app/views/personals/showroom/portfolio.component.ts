import { Component, inject, signal } from '@angular/core';
import { TitledComponent } from '../../../components/Titled';
import { PortfolioService } from '../../../services/portfolio.services';
import { SlicedComponent } from '../../../components/sliced.component';
// import { ModalComponent } from '../../../components/modal';
// import { RatingsComponent } from '../../../components/ratings/ratings.component';

@Component({
    selector: 'Portfolio',
    standalone: true,
    imports: [
        TitledComponent,
        SlicedComponent,
        // ModalComponent,
        // RatingsComponent,
    ],
    templateUrl: './portfolio.component.html',
})
export default class PortfolioComponent {
    public service = inject(PortfolioService);

    public open = signal<boolean>(false);

    public header = signal('');

    openRatings(idx?: any) {
        this.open.update(() => !this.open());

        idx && idx.category == 'playground' && this.open() == true
            ? this.header.update(
                  () => this.service.playground[idx?.index]?.projectName
              )
            : this.header.update(
                  () => this.service.portfolio[idx?.index]?.projectName
              );
    }
}
