import { FETCH_BOOKS } from '../constants/booksConstants';

const initialState = [];

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...state, ...action.payload];

    default:
      return initialState;
  }
};
