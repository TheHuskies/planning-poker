import api from "./index";

const CreateRoom = (roomData) => {
  return api.post(`/rooms`, roomData);
};

export default CreateRoom;
