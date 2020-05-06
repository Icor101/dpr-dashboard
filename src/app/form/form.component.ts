import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dpr } from '../Dpr';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryDb } from '../in-memory-db';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    private REST_URL = 'http://34.69.234.16:3001/save'; // prod URL
    // private REST_URL = 'http://localhost:3001/save'; // dev URL

    model: NgbDateStruct;
    obj: Dpr = new Dpr();

    addToDB() {
        this.db.store.push(this.obj);
        console.log('Form Component:');
        console.log(this.db.store);

        this.addRecord().subscribe((data) => {
            console.log(data);
        });

        this.obj = new Dpr();
    }

    public addRecord() {
        console.log('Inside Add Record');
        return this.httpClient.post<any>(this.REST_URL, this.obj);
    }

    constructor(private httpClient: HttpClient, public db: InMemoryDb) { }

    ngOnInit(): void {
    }

}
