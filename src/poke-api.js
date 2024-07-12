import { LitElement, html } from 'lit-element';
import './component/GetData';

export class pokeApi extends LitElement {
    static get properties() {
        return {
            wiki: {type: Array},
        }
    }

    constructor() {
      super();

      this.wiki = [];

        this.addEventListener('ApiData', (e) => {
          console.log(e.detail.data)
          this._dataFormat(e.detail.data)
        });
    }

    _dataFormat(data) {
      let generationData = [];

        data["results"].forEach((item) => {
            generationData.push({
                name: item.name,
                img:  item.url
            });
        });
        console.log(generationData);
        this.wiki =generationData;

    }



    render() {
        return html`
            <get-data url="https://pokeapi.co/api/v2/pokemon" method="GET"></get-data>
            ${this.dateTemplate}
        `;
    }

    get dateTemplate() {
      return html`
        ${this.wiki.map(generationData => html `
          <div class="card">
            <div class="card-content">
              <h2>${generationData.name}</h2>
              <img src="${generationData.img}">
            </div>
          </div>
        `)}
      `;
    }
}
customElements.define('poke-api', pokeApi);


