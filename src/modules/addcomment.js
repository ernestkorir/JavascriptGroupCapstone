// import './comments.js';
// import listComment from './listComments.js';

// const addComments = () => {
//   let data = {};
//   const name = document.getElementById('finput');
//   const insight = document.getElementById('finput');
//   const COMMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OnnRQvLr76shLtgxRFiP/comments';

//   const addToApi = async(data, id) => {
//     await fetch(`${COMMENT_URL}`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json',
//     }
//   }).then((res) => res.json());

//   name.value = '';
//   insight.value= '';
//   listComment(id);
// }

// window.submitValue = function(id) {
//   data = {
//     item_id : id,
//     username: name.value,
//     comment: insight.value,
//   };
//   addToApi(data, id);
// }
// }

// export default addComments;