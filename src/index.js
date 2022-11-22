import './index.css';
import Movies from './modules/movies.js';
import Comments from './modules/comments';

const movies = new Movies();
const comments = new Comments();

movies.displayMovies();
comments.showComments();


