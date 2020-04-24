import { Component, OnInit } from '@angular/core';
import { Dpr } from '../Dpr';
import { Ceasure } from '../ceasure';
import { Lf } from '../lf';
import { Hec } from '../hec';
import { Sample } from '../sample';
import { Nbup } from '../nbup';
import { TestData } from '../TestData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  map:{ [name: string]: string[] } = {
    "LF": ["Date", "PR"],
    "HEC": ["Date", "PR"],
    "Sample":["Date","WC","Bup","Lp"],
    "NBUP":["Date","Action","Remark"],
    "Ceasure":["Date","Reason","Remark"],
    "Test Data":["Date","Liq Rate","WC","Oil","Water"],
    "Work Over":["Date","Remark"]
  };

  modelLf = new Lf();
  modelHec = new Hec();
  modelSample = new Sample();
  modelNbup = new Nbup();
  modelCeasure = new Ceasure();
  modelTestData = new TestData();
  model = new Dpr(this.modelLf,this.modelHec,this.modelSample,this.modelNbup,this.modelCeasure,this.modelTestData);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
