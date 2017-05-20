import {Component} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    styleUrls: ['./app/dashboard/dashboard.component.less']
})

export class DashboardComponent {
    public page: string;
    constructor() { }

    public changePage(page: string) {
        this.page = page; 
    }
}