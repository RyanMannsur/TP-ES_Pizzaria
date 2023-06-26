import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import * as C from "./styles";
import Button from "../../components/Button";

const Carrinho = () => {
  const { carrinho, pedidoFeito, carrinhoLimpo, home } = useAuth();
  const itensCarrinho = carrinho();
  const navigate = useNavigate();
  const [valorFinal, setValorFinal] = useState(0);

  const handleFazerPedido = () => {
    alert("Pedido feito com sucesso!");
    navigate("/home"); {/* Vai para Home */}
  };

  const handleVoltar = () => {
    navigate("/home");
  };

  const itensRenderizados = [];
  for (let i = 0; i < itensCarrinho.length; i++) {
    const item = itensCarrinho[i];
    itensRenderizados.push(
      <C.Item key={i}>
        <C.ItemInfo>
          <C.ItemName>{item.itens}</C.ItemName>
          <C.ItemDescription>{item.desc}</C.ItemDescription>
          <C.ItemPrice>{item.valor}</C.ItemPrice>
        </C.ItemInfo>
      </C.Item>
    );
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < itensCarrinho.length; i++) {
      const item = itensCarrinho[i];
      total += item.valor;
    }
    setValorFinal(total);
  }, [itensCarrinho]);

  return (
    <C.Container>
      <C.Label>Carrinho</C.Label>
      <C.Label2>
        {itensRenderizados}
      </C.Label2>
      <C.Label>O Valor total é: R$ {valorFinal}</C.Label>
      <Button Text="Fazer Pedido" onClick={handleFazerPedido} />
      <Button Text="Voltar e Limpar Carrinho" onClick={handleVoltar} />
    </C.Container>
  );
};

export default Carrinho;
