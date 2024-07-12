import { LitElement, html } from 'lit-element';

export class getData extends LitElement {

    static get properties() {
      return{
        url: {type: String},
        metho: {type: String}
      }
    }

    firstUpdated() {
      this.getData()
    }

    _sendData(data){
        this.dispatchEvent(new CustomEvent('ApiData', {
          detail: { data }, bublees: true, composed: true
        }));
    }

    getData() {
        fetch(this.url, {method: this.method})
        .then((response) => {
          if(response.ok) return response.json();
          return Promise.reject(response);
          })
        .then((data) => { this._sendData(data); })
      .catch((error) => { console.warn('algo ha fallado', error); })
    }




    render() {
        return html`
<p>holi</p>
        `;
    }
}
customElements.define('get-data', getData);

// let urlAnterior;
// let urlPosterior="https://pokeapi.co/api/v2/pokemon";
