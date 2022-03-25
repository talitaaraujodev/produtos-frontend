import axios from "./ServicesConfig";

const usuarioService = {
  async login(data) {
    return await axios.post("/login", { ...data });
  },
  async register(data) {
    return await axios.post("/register", { ...data });
  },
};
export default usuarioService;
