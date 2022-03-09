import axios from "./ServicesConfig";


const loginService = {
  async login(data) {
    return await axios.post("/login", {...data});
  },
};
export default loginService;
