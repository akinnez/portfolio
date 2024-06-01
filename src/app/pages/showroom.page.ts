import PortfolioComponent from '../views/personals/showroom/portfolio.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    imports: [PortfolioComponent],
    template: ` <Portfolio /> `,
})
export default class PortfolioPageComponent {}
