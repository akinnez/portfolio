import { Component, input } from '@angular/core';

@Component({
    selector: 'app-single-blog',
    standalone: true,
    imports: [],
    template: `<p>blog {{ blogId() }}</p>`,
})
export default class SingleBlogComponent {
    blogId = input<string>();
    constructor() {}
}
