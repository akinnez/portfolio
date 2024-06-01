import {
    Component,
    OnInit,
    ViewContainerRef,
    inject,
    viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-write-blog',
    standalone: true,
    imports: [],
    template: `
        <div>
            <ng-container #container></ng-container>
        </div>
    `,
})
export default class WriteBlogPageComponent implements OnInit {
    write = viewChild.required('container', { read: ViewContainerRef });

    protected activatedRoute = inject(ActivatedRoute);

    constructor() {}
    ngOnInit(): void {
        let vs = this.activatedRoute.queryParams.subscribe({
            next: (res) => {
                this.loadComponent(res['writeId']);
            },
            complete: () => {
                vs.unsubscribe();
            },
        });
    }

    async loadComponent(queryParams: string | undefined) {
        this.write()?.clear();
        if (queryParams) {
            console.log(queryParams);

            const { EditBlogComponent } = await import(
                '../../views/blogs/edit/edit.component'
            );
            this.write()?.createComponent(EditBlogComponent);
            return;
        }
        const { CreateBlogComponent } = await import(
            '../../views/blogs/create/create.component'
        );

        this.write()?.createComponent(CreateBlogComponent);
        console.log('ddd');

        return;
    }
}
