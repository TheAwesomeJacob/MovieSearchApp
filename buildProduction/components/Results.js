import Movie from './Movie';
import '../styles/movieStyle.scss';

const Results = ({ items }) => {
  return (
    <div className="movie-list">
      {
          !items.length ? (
            <h1>
              No Movies found
            </h1>
          ) : (
            items.map(item => (
              <Movie
                id={item.id}
                movieTitle={item.title}
                releaseDate={item.release_date}
                voteRaitings={item.vote_average}
                posterImage={item.poster_path}
              />
            ))
          )
        }
    </div>
  )
}

export default Results;