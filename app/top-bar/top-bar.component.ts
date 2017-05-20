import {Component, NgZone} from '@angular/core';

interface IMenuNames {
    name: string;
    value: string;
}

@Component({
    selector: 'top-bar',
    //template: '<div *ngFor="let button in buttons" ><a href="#">{{button.name}}</a></li>',
    templateUrl: './app/top-bar/top-bar.component.html',
    styleUrls: ["./app/top-bar/top-bar.component.less"],
})

export class TopbarComponent {
    private title: string;
    public buttons: IMenuNames[];

    constructor(
        private zone: NgZone
    ) {
        this.title = 'my awesome app';
        this.buttons = [
            { name: "Hem", value: "hem" },
            { name: "Hitta Salong", value: "hitta" },
            { name: "Boka", value: "boka" },
            { name: "Logga in", value: "login" }
        ];
    }
}