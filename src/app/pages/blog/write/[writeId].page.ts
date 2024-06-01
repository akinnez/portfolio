import { Component, input } from '@angular/core';

@Component({
    selector: 'app-edit-blog',
    standalone: true,
    imports: [],
    template: `<p>blog write {{ writeId() }}</p>`,
})
export default class EditSingleBlogComponent {
    writeId = input<string>();
    constructor() {}
}
