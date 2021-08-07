class SearchView {
    _parentEL = document.querySelector('.search');

  getQuery() {
    const query = this._parentEL.querySelector('.search__field').nodeValue;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEL.querySelector('.search__field').nodeValue = '';
  }

  addHandlerSearch(handler) {
    this._parentEL.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
