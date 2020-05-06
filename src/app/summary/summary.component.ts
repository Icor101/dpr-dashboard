import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryDb } from '../in-memory-db';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    private REST_URL = 'http://34.69.234.16:3001/dprs'; // prod URL
    // private REST_URL = 'http://localhost:3001/dprs'; // dev URL

    dprs = [];

    constructor(private httpClient: HttpClient, public db: InMemoryDb) {
        console.log('Summary:');
        // console.log(this.db.store);
    }

    public getDprData() {
        return this.httpClient.get(this.REST_URL);
    }

    ngOnInit(): void {
        this.getDprData().subscribe((data: any[]) => {
            this.dprs = data;
            console.log(data);
        });
    }

}
