import { Feature } from './feature'
import { Vendor } from './vendor'
import { CommunicationProtocol } from './communication-protocol'

export class Tool{
    id: number;
    name: string;
    description:string;
    features:Feature[];
    communicationProtocols:CommunicationProtocol[];
    vendor:Vendor;
    constructor(id:number,name:string,description:string,features:Feature[],communicationProtocols:CommunicationProtocol[],vendor:Vendor){
        this.id=id;
        this.name=name;
        this.description=description;
        this.features=features;
        this.communicationProtocols=communicationProtocols;
        this.vendor=vendor;
    }
}