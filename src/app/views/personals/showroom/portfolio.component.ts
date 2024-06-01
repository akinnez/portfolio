import { Component, inject } from '@angular/core';
import { TitledComponent } from '../../../components/Titled';

@Component({
    selector: 'Portfolio',
    standalone: true,
    imports: [TitledComponent],
    templateUrl: './portfolio.component.html',
})
export default class PortfolioComponent {}
