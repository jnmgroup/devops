import { LightningElement } from 'lwc';

export default class LWCExample_CondRender extends LightningElement {
    areDetailsVisible = false;

    handleChange(event){
            this.areDetailsVisible = event.target.checked;
    }
}