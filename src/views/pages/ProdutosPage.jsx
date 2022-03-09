import React, { useState, useEffect, useCallback } from "react";
import produtoService from "../../services/ProdutosService";

export default function ProdutosPage() {
      const [produtos, setProdutos] = useState([]);

      const getProdutos = useCallback(() => {
            produtoService.obterProdutos().then((response) => {
                  setProdutos(response.data);
            })
                  .catch((error) => {
                        console.log(error);
                  })
      }, []);

      useEffect(() => {
            getProdutos();
      }, [getProdutos]);

      return (
            <table>
                  <thead>
                        <tr>
                              <th>#</th>
                              <th>Nome</th>
                              <th>Preço</th>
                              <th>Descrição</th>
                        </tr>
                  </thead>
                  <tbody>
                        {produtos.map((produto, key) => {
                              return (
                                    <tr key={key}>
                                          <td>{produto.id}</td>
                                          <td>{produto.nome}</td>
                                          <td>{produto.preco}</td>
                                          <td>{produto.descricao}</td>
                                    </tr>
                              )
                        })}
                  </tbody>
            </table>
      )

}