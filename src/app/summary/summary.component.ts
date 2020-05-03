import { Component, OnInit } from '@angular/core';
import { InMemoryDb } from '../in-memory-db';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    constructor(public db: InMemoryDb) {
        console.log('Summary:');
        console.log(this.db.store);
    }

    ngOnInit(): void {
    }

}
