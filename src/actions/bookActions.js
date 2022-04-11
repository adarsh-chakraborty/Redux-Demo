// Action Creators
// Action Creators are functions that return another function.
import { FETCH_BOOKS } from '../constants/booksConstants';
export const getBooks = () => async (dispatch) => {
  const res = await fetch('https://bookshelf.gq/api/books?size=7');
  const data = await res.json();
  dispatch({ type: FETCH_BOOKS, payload: data.books });
};
