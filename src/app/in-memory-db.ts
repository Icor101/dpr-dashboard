import { Injectable } from '@angular/core';
import { Dpr } from './Dpr';

@Injectable()
export class InMemoryDb {
    store: Dpr[] = [];
}
