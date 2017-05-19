import {Component, NgZone} from '@angular/core';

@Component({
    selector: 'top-bar',
    templateUrl: './app/top-bar/top-bar.component.html',
    styleUrls: ["./app/top-bar/top-bar.component.less"]
})
export class TopbarComponent {

    private title: string;

    constructor(
        private zone: NgZone
    ) {
        this.title = 'my awesome app';
    }

}