import axios from "axios";
import storage from "../utils/storage";

const Axios = axios.create({
  headers: {
    Authorization: storage.getItem("loginToken"),
  },
});

export default Axios;
