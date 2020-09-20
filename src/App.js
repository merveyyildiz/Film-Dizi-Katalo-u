import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import {
  getResultCount,
  getCurrentPage,
  getData,
  getLoading,
  getError,
} from './actions/index';
function App() {
  const [q, setQuery] = useState('pokemon');
  const dispatch = useDispatch(); //bunun sayesinde action ulaşacağız
  const currentPage = useSelector((state) => state.currentPage);
  useEffect(() => {
    dispatch(getLoading(true));
    dispatch(getError(null));
    dispatch(getData(null));

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=ea5d4c63&page=${currentPage}`)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === 'False') {
          dispatch(getError(response.Error));
        } else {
          dispatch(getData(response.Search));
          dispatch(getResultCount(response.totalResults));
        }
        dispatch(getLoading(false));
      })
      .catch(({ message }) => {
        dispatch(getError(message));
        dispatch(getLoading(false));
      });
  }, [q, currentPage]);

  const paginate = (pageNumber) => {
    dispatch(getCurrentPage(pageNumber));
  };
  return (
    <div className="container">
      <div className="d-flex align-items-center flex-column mt-4">
        <h1>FİLM/DİZİ KATALOĞU</h1>
        <input
          type="text"
          className="col-md-6 form-control mb-4"
          placeholder="Film, Dizi yada Yıl giriniz."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <Posts />
      <Pagination paginate={paginate} />
    </div>
  );
}

export default App;
