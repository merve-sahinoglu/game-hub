import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3aafdf60e2b043318480c281f7daf79e",
  },
});
