import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(date) {
    if (!data || (Array.isArray(data)) && data.length === 0) return this.renderError();
    this._data = data;
    const markeup = this._generateMarkup();
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //DOM update dynamically (only update the changes to the recipe view not the whole component(view))
  update(data) {
    this._data = data;
    const newMarkeup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkeup);
    const newElements = Array.from(newDOM.querySelectorALL('*'));
    const curElements = Array.from(this._parentElement.querySelectorALL("*"));

    //Update changed TEXT
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (newEl.isEqualNode(curEl) && newEl.firstChild.nodeValue.trim() !== '')
        curEl.textContent = newEl.textContent;
    });

    //Update changed Attributes 
    if (!newEl.isEqualNode(curEl))
      Array.from(newEl.attributes).forEach(attr =>
        curEl.setAttribute(attr.name, attr.value)
      );
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

  renderMessage(message = this._errorMessage) {
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
    this._parentElement.insertAdjacentElement('afterbegin', markup)
  }

}