// import "./movie.js";
// import listComment from './listComments.js';

// const comments = () => {
//   const modal = document.querySelector('#modal-wrap');
//   const projectModal = document.createElement('div');
//   // const baseApi = 'https://api.tvmaze.com/shows/';
//   const details =[{ 
//     country: '', genre: ['Comedy'], image: '', release: '', summary: '',
//   }];

// }

const projectModal = document.querySelector('.modal-wraper');


export const addCommentPopupEvent = () => {
  const commentBtns = document.querySelectorAll('.btn');
  commentBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    fillDetails(btn.id);
  }))
}

export const displayDetails = (id) => {
  projectModal.innerHTML = '';

  const projectCode = `
  <div class='movie-pop-up'>
  <div class="mclose-btn">  
  <button onclick='modalClose()' id='close-modal'>
  <i class="fa fa-times fa-2x" aria-hidden="true"></i>
  </button>
  </div>

  <div class= 'modal-image'>
  <img
  src = "${details.image}";
  alt = "cover image"
  id = "modal-cover"
  />
  </div>
  <div class= "modal-head">
    <div class = "summary">${details.summary}</div>
  </div>

  <div class = "movie-attributes">
    <ul>
      <li><span>Name:</span>${details.name}</li>
      <li><span>Country:</span>${details.country}</li>
    </ul>
    <ul>
      <li><span>Genre:</span>${details.genre}</li>
      <li><span>Release:</span>${details.release}</li>
    </ul>
  </div>

  <div class= "comment-display">
    <h2>Comments</h2>
    <ul id="comments-section">
      <li>11/23/2022 Comments</li>
      <li>11/23/2022 Comments</li>
      <li>11/23/2022 Comments</li>
    </ul>
  </div>

  <div class="add-comment">
  <h2>Comments</h2>
    <ul>
    <li><input type="text" id="finput" placeholder="Your Name" ></input></li>
    <li><textarea id="linput" cols="30" rows="10" placeholder="Your insights"></textarea></li>
    <li><button id="submit" onclick="submitValue(${id})">Comment</button></li>
    </ul>
  </div>
  </div>
  `;
  projectModal.innerHTML += projectCode;
modal.appendchild(projectModal);
listComment(id);
};

const fillDetails = async (id) => {
  const baseApi = 'https://api.tvmaze.com/shows/';
  const list = await fetch(`${baseApi}${id}`).then((response) => response.json());
  console.log(list);
};
    // details.name =list.name;
    // details.genre =list.genre;
    // details.release =list.release;

    //   if(list.network === null){
    //     details.country = 'N/A';
    //   } else{
    //     details.country= list.network.country.name;
    //   }
    //   if(list.summary === null){
    //     details.summary = '';
    //   } else{
    //     details.summary= list.summary;
    //   }
    //   displayDetails(id);


// window.checkme = function () {
//   fillDetails(id);
// }

// window.modalClose = function (){
//   document.getElementById('modal').style.display = 'none';
// };

// export default comments;