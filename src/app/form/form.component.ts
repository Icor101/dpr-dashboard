import { Component, OnInit } from '@angular/core';
import { Dpr } from '../Dpr';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    model: NgbDateStruct;
    obj: Dpr = new Dpr();
    db: Dpr[] = [];

    addToDB() {
        this.db.push(this.obj);
        console.log(this.db);
        this.obj = new Dpr();
    }

    constructor() { }

    ngOnInit(): void {
    }

}
