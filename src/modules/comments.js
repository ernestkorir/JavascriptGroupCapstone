const fillDetails = async (id) => {
  const baseApi = 'https://api.tvmaze.com/shows/';
  const list = await fetch(`${baseApi}${id}`).then((response) => response.json());
  return list;
};

const addClosePopUpevent = () => {
  const closeBtn = document.querySelector('.mclose-btn');
  closeBtn.addEventListener('click', () => {
    const popupModal = document.querySelector('.modal-wraper');
    popupModal.style.display = 'none';
  });
};

export const createPopUpDetails = (details) => {
  const projectModal = document.createElement('div');
  projectModal.className = 'movie-pop-up';

  projectModal.innerHTML = `
  <div class="mclose-btn">
  <span class="close-span">X</span>  
  </div>
  
  <div class="popup-top-section">
  <div class= 'modal-image'>
  <img
  src="${details.image.medium}";
  alt="cover image"
  id="modal-cover"
  />
  </div>
  <div class= "modal-head">
      <div class = "summary">${details.summary}</div>
  </div>
  </div>
  
  <div class = "movie-attributes">
      <ul>
      <li><span>Name:</span>${details.name}</li>
      <li><span>Language:</span>${details.language}</li>
      </ul>
      <ul>
      <li><span>Genre:</span>${details.genres[0]}</li>
      <li><span>Premiered:</span>${details.premiered}</li>
      </ul>
  </div>
  
  <div class= "comment-display">
      <h2>Comments</h2>
  </div>
  
  <div class="add-comment">
  <h2>Add Comment</h2>
  </div>
`;
  return projectModal;
};

const displayPoUp = async (id) => {
  const popupModal = document.querySelector('.modal-wraper');
  popupModal.innerHTML = '';

  const movieDetail = await fillDetails(id);
  popupModal.append(createPopUpDetails(movieDetail));

  popupModal.style.display = 'flex';
  addClosePopUpevent();
};

export const addCommentPopupEvent = () => {
  const commentBtns = document.querySelectorAll('.btn');
  commentBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    displayPoUp(btn.id);
  }));
};
