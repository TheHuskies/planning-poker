import api from ".";

const DeleteStory = (idStory) => {
  return api.delete(`stories/${idStory}`);
};

export default DeleteStory;
