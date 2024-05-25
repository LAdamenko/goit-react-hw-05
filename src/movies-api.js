import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/movie/11?api_key=345c1524e82c39c257a6cc5e77929103';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDVjMTUyNGU4MmMzOWMyNTdhNmNjNWU3NzkyOTEwMyIsInN1YiI6IjY2NTI1NzdlMGI4YTRmMjhlNjU1YWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_b0MvPl0yWfsGy7VNoqP6mhVe8EQzXwWH267Tbeomk',
  },
};

axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
