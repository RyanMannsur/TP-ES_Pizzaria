import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import * as C from "./styles";
import Button from "../../components/Button";
import Cardapio from "./pedidos";

const Home = () => {
  const tamanhoPizza = ["Inteira", "Meia"];
  const [tamanho, setTamanho] = useState("Inteira");
  const { signout, home, carrinho } = useAuth();
  const navigate = useNavigate();
  const cardapio = Cardapio();
  const [error, setError] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [valido, setValido] = useState(true);


  const handleAddPedido = (item) => {

    if (tamanho != tamanhoPizza[1] && tamanho != tamanhoPizza[0]) {
      setError("Pedido Invalido");
      return;
    }

    const novoPedido = item;

    if ((!valido) && (tamanho == tamanhoPizza[0])) {
      setError("Peça a segunda metade da pizza");
      return;
    }

    if (tamanho == tamanhoPizza[1]) {
      setValido(!valido);
      novoPedido.valor = item.valor / 2;
    }

    const novoArrayPedidos = [...pedidos, novoPedido];
    setPedidos(novoArrayPedidos);
    alert("Pedido adicionado ao carrinho!");
    setError("");
  };

  const handleTamanhoChange = (e) => {
    setTamanho(e.target.value);
    setError("");
  }

  const handleCarrinho = () => {
    if (!valido) {
      setError("Peça a segunda metade da pizza");
      return;
    }
    else {
      home(pedidos);
      navigate("/carrinho")
    }
  }

  useEffect(() => {
    console.log("Pedidos:", pedidos);
    console.log("Tamanho:", tamanho);
    console.log("Valido: ", valido)
  }, [pedidos]);

  return (
    <C.Container>
      <C.Label>Cardápio</C.Label>
      <C.SectionTitle>Pizzas</C.SectionTitle>
      <C.MenuList>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[0].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[0].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[0].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[0])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[1].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[1].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[1].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[1])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[2].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[2].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[2].valor}</C.MenuItemPrice>

          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[2])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[3].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[3].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[3].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[3])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[4].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[4].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[4].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[4])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[5].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[5].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[5].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[5])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[6].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[6].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[6].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[6])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[7].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[7].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[7].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[7])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[8].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[8].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[8].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[8])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[9].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[9].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[9].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[9])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[10].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[10].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[10].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[10])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[11].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[11].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[11].valor}</C.MenuItemPrice>
          <C.Select value={tamanho} onChange={handleTamanhoChange}>
            <option value="">Selecione o tamanho da Pizza</option>
            {tamanhoPizza.map((tamanho) => (
              <option key={tamanho} value={tamanho}>
                {tamanho}
              </option>
            ))}
          </C.Select>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[11])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
      </C.MenuList>
      <C.SectionTitle>Bebidas</C.SectionTitle>
      <C.MenuList>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[12].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[12].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[12].valor}</C.MenuItemPrice>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[12])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[13].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[13].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[13].valor}</C.MenuItemPrice>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[13])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[14].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[14].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[14].valor}</C.MenuItemPrice>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[14])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
      </C.MenuList>
      <C.SectionTitle>Combos</C.SectionTitle>
      <C.MenuList2>
        <C.MenuItem>
          <C.MenuItemTitle>{cardapio[15].itens}</C.MenuItemTitle>
          <C.MenuItemDescription>{cardapio[15].desc}</C.MenuItemDescription>
          <C.MenuItemPrice>{cardapio[15].valor}</C.MenuItemPrice>
          <Button
            Text="Adicionar"
            onClick={() => handleAddPedido(cardapio[15])} // Chamada da função para adicionar o pedido
          />
        </C.MenuItem>
      </C.MenuList2>
      <C.labelError>{error}</C.labelError>
      <C.MenuItem>
        <C.labelQuantidade>{pedidos.length} Pedidos no Carrinho.</C.labelQuantidade>
      </C.MenuItem>
      {/*<Button Text="Adicionar Pedido" onClick={handlePedido} />*/}
      <Button Text="Ver Carrinho" onClick={() => [handleCarrinho()]} />
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;