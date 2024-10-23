import { Component, input, OnInit, output, signal } from '@angular/core';
import { CardComponent } from './card';
import { AvatarComponent } from './Avatar';
import { TitledComponent } from './Titled';
import { StatusComponent } from '../utils/icons/statusbar';
import { portfolioType } from '../utils/types';

@Component({
    selector: 'Sliced',
    standalone: true,
    imports: [CardComponent, AvatarComponent, TitledComponent, StatusComponent],
    template: `
        <section>
            <div class="lg:grid lg:grid-cols-3 gap-10 my-10">
                @for(showroom of portfolioValue(); track showroom;let idx =
                $index){
                <Card
                    styles="p-5 relative text-justify text-center lg:text-left rounded-xl my-5 lg:my-0 lg:h-[calc(70vh)] {{
                        className()
                    }}"
                >
                    @if(showroom.icon){
                    <Avatar
                        link="{{ showroom.icon }}"
                        name="{{ showroom.projectName }}"
                        [width]="showroom.iconWidth ?? 200"
                        [height]="showroom.iconHeight ?? 200"
                        styles="mx-auto"
                    />
                    }

                    <div class="py-5">
                        <Titled
                            styles="text-2xl font-bold italic text-center"
                            content="{{ showroom.projectName }}"
                        />
                    </div>

                    <span class="text-justify">
                        {{ showroom.description }}
                    </span>
                    <div class="mt-5">
                        @if(showroom.stack){
                        <div class="flex flex-wrap justify-end gap-3">
                            @for(stack of showroom.stack; track stack){
                            <Status statusProps="{{ stack }}" />
                            }
                        </div>
                        }
                    </div>
                    <div
                        class="flex items-center justify-between gap-5 sm:gap-10 my-5"
                    >
                        <a
                            [href]="showroom.demoLink"
                            target="_blank"
                            class="my-3 block"
                        >
                            <button
                                class="py-3 px-4 border-2 border-foreground rounded-2xl hover:text-background hover:bg-foreground"
                            >
                                Preview
                            </button>
                        </a>
                        <a
                            [href]="showroom.githubLink"
                            target="_blank"
                            class="my-3 block"
                        >
                            <button
                                class="py-3 px-4 border-2 border-foreground rounded-2xl hover:text-background hover:bg-foreground"
                            >
                                Github
                            </button>
                        </a>
                    </div>
                </Card>
                }
            </div>
            @if(portfolio().length > 6){
            <button
                class="py-3 px-4 border-2 lg:border-none w-full lg:w-fit border-foreground rounded-2xl lg:hover:text-foreground lg:hover:bg-transparent hover:text-background hover:bg-foreground"
                (click)="
                    portfolioValue().length > 6
                        ? portfolioSeeLess()
                        : portfolioSeeMore()
                "
            >
                Show {{ portfolioValue().length > 6 ? 'Less' : 'More' }} ...
            </button>
            }
        </section>
    `,
})
export class SlicedComponent implements OnInit {
    className = input<string>('');
    portfolio = input<portfolioType[]>([]);
    category = input<string>();
    openRatings = output();
    portfolioValue = signal<portfolioType[]>([]);

    constructor() {
        this.portfolioValue.update(() => this.portfolio());
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
}
