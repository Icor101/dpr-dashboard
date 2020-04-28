import { Component, OnInit } from '@angular/core';
import { Dpr } from '../Dpr';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model: NgbDateStruct;
  obj: Dpr = new Dpr();
  db: Dpr[]=[];

  submitted = false;

  addToDB() {
    this.submitted = true;
    this.db.push(this.obj);
    this.obj = new Dpr();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
