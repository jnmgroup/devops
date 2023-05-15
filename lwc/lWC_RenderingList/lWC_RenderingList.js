import { LightningElement } from 'lwc';

export default class LWC_RenderingList extends LightningElement {
    contacts = [
        {
            Id : 1,
            Name : 'Dinesh',
            Title : 'Founder of JnM Groups'
        },
        {
            Id : 2,
            Name : 'Reddy',
            Title : 'CEO of JnM Groups'
        },{
            Id : 3,
            Name : 'KDR',
            Title : 'MD of JnM Groups'
        },

    ];
}