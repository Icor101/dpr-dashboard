import { Lf } from './Lf';
import { Hec } from './Hec';
import { Sample } from './Sample';
import { Nbup } from './Nbup';
import { Ceasure } from './Ceasure';
import { TestData } from './TestData';
import { WorkOver } from './work-over';

export class Dpr {
    lf: Lf = new Lf();
    hec: Hec = new Hec();
    sample: Sample = new Sample();
    nbup: Nbup = new Nbup();
    ceasure: Ceasure = new Ceasure();
    testData: TestData = new TestData();
    workOver: WorkOver = new WorkOver();
}
