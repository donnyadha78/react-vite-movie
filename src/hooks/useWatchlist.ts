import { addToWatchlist as addWatchlist, removeFromWatchlist } from '@app/redux/actions/watchlistActions';
import { IMovieData, IRootState } from '@app/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const useWatchlist = () => {
  const watchlist = useSelector((state: IRootState) => state.watchlist);
  const dispatch = useDispatch();

  const isWatchlist = (movieId: number | string) => watchlist.some(item => item.id === movieId);

  const addToWatchlist = (movie?: IMovieData) => {
    if (!movie) return;

    if (!isWatchlist(movie.id)) {
      dispatch(addWatchlist(movie));
      toast.dismiss();
      toast.dark(`${movie.original_name || movie.original_title} \n\r Added to watchlist`);
    } else {
      dispatch(removeFromWatchlist(movie.id));
      toast.dismiss();
      const options = {
        autoClose: 5000,
        progressStyle: { backgroundColor: '#DC143C' }
      };
      toast.dark(`${movie.original_name || movie.original_title} \n\r removed from watchlist`, options);
    }
  };

  return { watchlist, isWatchlist, addToWatchlist };
};

export default useWatchlist;
