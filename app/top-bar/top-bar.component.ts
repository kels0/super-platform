import {Component, Input, Output, EventEmitter} from '@angular/core';

interface IMenuNames {
    name: string;
    value: string;
}

@Component({
    selector: 'top-bar',
    templateUrl: './app/top-bar/top-bar.component.html',
    styleUrls: ["./app/top-bar/top-bar.component.less"]
})

export class TopbarComponent {
    @Output() changeCurrentPage: EventEmitter<any> = new EventEmitter();
    public buttons: IMenuNames[];

    constructor(
    ) {
        this.buttons = [
            { name: "Hem", value: "hem" },
            { name: "Hitta Salong", value: "hitta" },
            { name: "Boka", value: "boka" },
            { name: "Logga in", value: "login" }
        ];
    }
    public updatePage(value: string) {
        this.changeCurrentPage.emit(value);
    }
}