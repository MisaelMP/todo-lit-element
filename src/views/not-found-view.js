import { BaseView } from './base-view';
import { html } from 'lit-html';

/**
* @polymer
* @extends HTMLElement
*/
class NotFoundView extends BaseView {
  render() {
    return html `
      <h1 class="text-5xl text-gray-500 text-center">Page not found!</h1>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);
