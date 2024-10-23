import { Component, inject, input } from '@angular/core';
import {
    EmailValidator,
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'RatingsForm',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './ratingsForm.component.html',
})
export class RatingsFormComponent {
    ratingValue = input();
    public fb = inject(FormBuilder);
    forms!: FormGroup;

    constructor() {
        this.forms = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            comment: [''],
        });
    }

    submitButton() {
        if (this.ratingValue() && this.forms.value.email != '') {
            const payload = {
                rating: this.ratingValue(),
                ...this.forms.value,
            };

            console.log(payload);
        }
    }
}
