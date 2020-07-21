import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World hello ';
    changeHandler(event) {
        this.greeting = event.target.value;
    } 
}