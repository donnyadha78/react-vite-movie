import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from '@app/constants/actionType';
import { IMovieData } from '@app/types/types';

export const addToWatchlist = (movie: IMovieData) => (<const>{
  type: ADD_TO_WATCHLIST,
  payload: movie,
});

export const removeFromWatchlist = (id: number) => (<const>{
  type: REMOVE_FROM_WATCHLIST,
  payload: id,
});

export type TWatchlistActionType =
  | ReturnType<typeof addToWatchlist>
  | ReturnType<typeof removeFromWatchlist>;
