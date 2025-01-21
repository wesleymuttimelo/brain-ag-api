
export class Crop {
    id?: string;
    name: string;
    harvestId: string;
    farmId: string;

    constructor(props:{
        id?: string;
        name: string;
        harvestId: string;
        farmId: string;
    }) {
        this.id = props.id;
        this.name = props.name;
        this.harvestId = props.harvestId;
        this.farmId = props.farmId;
        return this;
    }
}