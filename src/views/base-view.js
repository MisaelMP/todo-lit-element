import { LitElement } from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class BaseView extends LitElement {
  createRenderRoot() {
    return this;
  }
}
