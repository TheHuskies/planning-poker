import api from "./index";

const CreateStories = (storyData) => {
  return api.post("/stories", storyData);
};

export default CreateStories;
