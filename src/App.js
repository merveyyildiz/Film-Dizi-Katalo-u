import React from 'react';
import { useState, useEffect } from "react";
import Posts from './components/Posts';
import Pagination from './components/Pagination';
function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage] = useState(10);
  const [q, setQuery] = useState('pokemon');
  let datalength=!data?null:data.length;
  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

 fetch(`http://www.omdbapi.com/?s=${q}&apikey=ea5d4c63&page=${currentPage}`)
   .then((resp) => resp.json())
   .then((response) => {
     if (response.Response === 'False') {
       setError(response.Error);
       
     } else {
       setData(response.Search);
       console.log(currentPage);
     }
     setLoading(false);
   })
   .catch(({ message }) => {
     setError(message);
     setLoading(false);
   });
  }, [q,currentPage]);

  
      const paginate = (pageNumber)=>{ setCurrentPage(pageNumber);}
      return (
        <div className="container">
          <div className="d-flex align-items-center flex-column mt-4">
            <h1>FİLM/DİZİ KATALOĞU</h1>
            <input
              type="text"
              className="col-md-6 form-control mb-4"
              placeholder="Film/Dizi adı, yıl veya imbd puanı giriniz."
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Posts posts={data} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPost={150}
            paginate={paginate}
          />
        </div>
      );  
}

export default App;
