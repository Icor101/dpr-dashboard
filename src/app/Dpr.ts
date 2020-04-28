import {Lf} from "./lf";
import {Hec} from "./hec";
import {Sample} from "./sample";
import {Nbup} from "./nbup";
import {Ceasure} from "./ceasure";
import {TestData} from "./TestData";
import { WorkOver } from './work-over';

export class Dpr {
    lf:Lf = new Lf();
    hec:Hec = new Hec();
    sample:Sample = new Sample();
    nbup: Nbup = new Nbup();
    ceasure: Ceasure = new Ceasure();
    testData: TestData = new TestData();
    workOver: WorkOver = new WorkOver();
    // constructor(lf:Lf,hec:Hec,sample:Sample,nbup:Nbup,ceasure:Ceasure,testData:TestData,workOver:WorkOver){
    //     this.lf=lf;
    //     this.hec=hec;
    //     this.sample=sample;
    //     this.nbup=nbup;
    //     this.ceasure=ceasure;
    //     this.testData=testData;
    //     this.workOver=workOver;
    // }
}
