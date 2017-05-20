'use strict';
// Angular modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Application modules
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TopbarComponent} from './top-bar/top-bar.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        TopbarComponent,
        SearchPageComponent
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }