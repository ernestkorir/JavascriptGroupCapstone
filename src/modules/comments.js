// import { ModuleFilenameHelpers } from "webpack";

import Movies from "./movies";

const movie = new Movies

const display = document.querySelector('.btn')

// movie.getMovieList();

export default class Comments {
  constructor() {
    this.API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pGidOXQmFelw7rXBNStp/comments?item_id=item1';
    this.comments = [];
  }

  getComments = async (key) => {
    const Query = `search/shows?q=${key}`;
    const list = await fetch(`${this.API_BASE_URL}${Query}`).then((response) => response.json());
    this.comments = [...this.comments, ...list];
  }

  displayComments = async () => {
    await this.getComments('username');
    await this.getComments('creation_date');
    await this.getComments('comment');

  const showComments = display.addEventListener('click', () => {
    // const list = this.comments.reduce((prev, curr) => {
    display.innerHTML = document.createElement('div');
    div.className = 'comments-wrapper';
    div.innerHTML = `
    Victoria's comment
  `;
return list;
  })
showComments();
}
} 