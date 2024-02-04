import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST
} from '@app/constants/actionType';
import { IMovieData } from '@app/types/types';
import { TWatchlistActionType } from '../actions/watchlistActions';

export default (
  state: IMovieData[] = [],
  action: TWatchlistActionType,
) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [action.payload, ...state];
    case REMOVE_FROM_WATCHLIST:
      return state.filter((watchlist) => watchlist.id !== action.payload);
    default:
      return state;
  }
};
