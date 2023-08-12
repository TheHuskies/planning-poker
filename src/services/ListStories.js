import api from ".";

const ListStories = (idRoom) => {
  return api.get(`/stories/${idRoom}`);
};

export default ListStories;
