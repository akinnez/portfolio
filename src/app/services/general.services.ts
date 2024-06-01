import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GeneralService {
    private http = inject(HttpClient);
    cache = JSON.parse(sessionStorage.getItem('memoize') as string);

    getPersonalInfo() {
        return this.http.get<any>('/data/cfs.json');
    }

    getStoreValue() {
        return JSON.parse(sessionStorage.getItem('memoize') as string);
    }
    getMessage() {
        return this.http.get('/api/v1/hello');
    }
}
