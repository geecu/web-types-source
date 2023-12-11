/**
 * This is the description of the class
 */
export class MyElement extends HTMLElement {
    constructor() {
        super();
        console.log('my-element');
    }
    static get observedAttributes() {
        return ['disabled', 'atx'];
    }

    set disabled(val) {
        this.__disabled = val;
    }
    get disabled() {
        return this.__disabled;
    }

    fire() {
        this.dispatchEvent(new Event('disabled-changed'));
    }
}

customElements.define('my-element', MyElement);
