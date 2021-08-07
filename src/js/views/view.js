import icons from '../../img/icons.svg';

export default class View {
    _data;
  render(date) {
    if(!data || (Array.isArray(data)) && data.length === 0) return this.renderError();
    this.#data = data;
    const markeup = this._generateMarkup();
    recipeContainer.innerHTML = '';
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
    <div class = "spinner">
     <svg>
        <use href = "${icons}#icon-loader"></use>
     </svg>
    </div>
    `;
    this._clear() = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderMessage(message = this._errorMessage){
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}.svg#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentElement('afterbegin',  markup)
  }

}