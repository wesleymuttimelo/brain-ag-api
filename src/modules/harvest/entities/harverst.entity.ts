import {randomUUID} from 'node:crypto'

export type crop = {
    id: string;
    name: string;
    harvestId: string;
    farmId: string;
}

export class Harvest {
    id: string;
    year: number;
    crops?: crop[];
    farmId: string;

    constructor(props:{
        id?: string;
        year: number;
        crops?: crop[];
        farmId: string;
    }) {
        Object.assign(this, props);
        this.id = randomUUID()
        return this;
    }
}