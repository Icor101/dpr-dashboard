import {Lf} from "./lf";
import {Hec} from "./hec";
import {Sample} from "./sample";
import {Nbup} from "./nbup";
import {Ceasure} from "./ceasure";
import {TestData} from "./TestData";

export class Dpr {
    lf:Lf;
    hec:Hec;
    sample:Sample;
    nbup: Nbup;
    ceasure: Ceasure;
    testData: TestData;

    constructor(lf:Lf,hec:Hec,sample:Sample,nbup:Nbup,ceasure:Ceasure,testData:TestData){
        this.lf=lf;
        this.hec=hec;
        this.sample=sample;
        this.nbup=nbup;
        this.ceasure=ceasure;
        this.testData=testData;
    }

}
