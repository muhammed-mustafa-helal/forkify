import View from './view';
import icons from '../../img/icons.svg';
import {} from '_fractional';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-inline');
      if(!btn) return;
      const goToPage = +btn.dataset.goToPage;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1 and there are other pages
    if (currPage === 1 && numPages > 1) {
      return `
          <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
            <span>${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }

    // lastPage
    if (currPage === numPages && numPages > 1) {
      return `
          <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
      `;
    }

    // Otherpage
    if (currPage < numPages) {
      return `
        <button data-goto="${currPage + 1}"  class="btn--inline pagination__btn--next">
          <span>${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
        <button data-goto="${currPage - 1}"class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage - 1}</span>
        </button>
      `;
    }

    //page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
