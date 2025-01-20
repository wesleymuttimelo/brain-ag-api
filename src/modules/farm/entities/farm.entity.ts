import {randomUUID} from 'node:crypto'

export class Farm {
    id: string;
    name: string;
    city: string;
    state: string;
    totalArea: number;
    arableArea: number;
    vegetationArea: number;
    farmerId: string;

    constructor(props:{
        id?: string;
        name: string;
        city: string;
        state: string;
        totalArea: number;
        arableArea: number;
        vegetationArea: number;
        farmerId: string;
    }) {
        Object.assign(this, props);
        this.id = randomUUID();
        this.isAreaExceeded();
        return this;
    }

    isAreaExceeded() {
        if((this.arableArea + this.vegetationArea) > this.totalArea){
            throw new Error('Area exceeded')
        }
    }
}