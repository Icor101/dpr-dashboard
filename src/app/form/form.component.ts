import { Component, OnInit } from '@angular/core';
import { Dpr } from '../Dpr';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryDb } from '../in-memory-db';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    model: NgbDateStruct;
    obj: Dpr = new Dpr();

    addToDB() {
        this.db.store.push(this.obj);
        console.log('Form Component:');
        console.log(this.db.store);
        this.obj = new Dpr();
    }

    constructor(public db: InMemoryDb) { }

    ngOnInit(): void {
    }

}
