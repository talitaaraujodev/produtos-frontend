import axios from "./ServicesConfig";


const produtoService = {
  async obterProdutos() {
    return await axios.get("/produtos", {security: true });
  },
};
export default produtoService;
