import React from 'react'

function Pedidos() {

const cardapio = [
    { itens: ["À Moda"],desc: ["muçarela, presunto etc"], valor: 24.99 },
    { itens: ["Margerita"],desc: ["muçarela, presunto, tomate etc"], valor: 24.99 },
    { itens: ["Portuguesa"],desc: ["muçarela, presunto, ovo etc"], valor: 24.99 },
    { itens: ["Muçarela"],desc: ["muçarela, toamate e etc"], valor: 19.99 },
    { itens: ["Frango"],desc: ["muçarela, frango e etc"], valor: 15.99 },
    { itens: ["Frango com catupiry"],desc: ["muçarela, frango, catupiry etc"], valor: 18.99 },
    { itens: ["Italiana"],desc: ["muçarela, tomate, alface etc"], valor: 19.99 },
    { itens: ["Calabresa"],desc: ["muçarela, presunto, calabresa etc"], valor: 19.99 },
    { itens: ["Vegetariana"],desc: ["tomate, pimentão, azeitonas etc"], valor: 19.99 },
    { itens: ["4 Queijos"],desc: ["muçarela, cheddar, parmesão, provolone e etc"], valor: 24.99 },
    { itens: ["Lombinho"],desc: ["muçarela, tomate, lombinho e etc"], valor: 19.99 },
    { itens: ["Bacon"],desc: ["muçarela, pimentão, bacon e etc"], valor: 19.99 },
    { itens: ["Coca Cola"],desc: ["Refrigerante 500ml"], valor: 7.99 },
    { itens: ["Coca Cola 250ml"],desc: ["Refrigerante 250ml"], valor: 4.99 },
    { itens: ["Agua com gás"],desc: ["Agua com gás 300ml"], valor: 4.99 },
    { itens: ["2 Pizza + Refrigerante"],desc: ["2 Pizza sabor Margerita + refrigerante coca 500ml"], valor: 49.99 },
    { itens: ["1 Pizza + 2 Refrigerante"],desc: ["1 Pizza sabor À moda + 2 refrigerante coca 250ml"], valor: 29.99 },
    { itens: ["2 Pizza + 4 Refrigerante"],desc: ["2 Pizza sabor À moda ou Portuguesa + 4 refrigerante coca 250ml"], valor: 59.99 },
  ];
  return cardapio;
}

export default Pedidos