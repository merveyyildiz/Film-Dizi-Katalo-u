import React from 'react';
import { Link } from 'react-router-dom';
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading.. </h2>;
  }
  return (
    <div className="container">
      <div className="row">
        {!posts
          ? null
          : posts.map((post) => {
              return (
                <div className="col-md-4 pl-2 " key={post.imdbID}>
                  <div className="card card-box">
                    <img
                      src={post.Poster}
                      className="card-img-top img-fluid img-box" alt="poster"
                    />
                    <div className="card-body">
                      <h5 className="card-title my-title">
                        <Link
                          to={{
                            pathname: '/detail',
                            state: {
                              title: post.Title,
                              imdb: post.imdbID,
                              img: post.Poster,
                              year: post.Year,
                              type: post.Type,
                            },
                          }}
                        >
                          {post.Title}
                        </Link>
                      </h5>
                    
                      <p className="card-text">
                        Yıl:{post.Year}<br></br>
                        Imdb İd:{post.imdbID}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Posts;
