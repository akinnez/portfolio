import {
    provideHttpClient,
    withFetch,
    // withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
// import { withComponentInputBinding } from '@angular/router';

export const appConfig: ApplicationConfig = {
    providers: [
        provideFileRouter(),
        provideHttpClient(withFetch()),
        provideClientHydration(),
        // provideFileRouter(withComponentInputBinding()),
    ],
};
