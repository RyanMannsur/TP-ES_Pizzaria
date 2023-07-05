import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    {/*Pego a conta salva anteriormente, com o token autenticado*/ }
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users.db");

    if (userToken && usersStorage) {
      {/*Se existe, percorre os usuários salvos e salva em hassUser*/ }
      const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === JSON.parse(userToken).email);

      {/*Faço login com o usuário ja autenticado*/ }
      if (hasUser) setUser(hasUser[0]);

    }
  }, []);

  const signin = async (email, password) => {
    {/* Recebe email e senha como parametro */ }
    const response = await fetch('https://localhost:7088/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    });

    if (response.ok) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("user_token", JSON.stringify({ email, token })); {/* Token de autenticação gerado */ }
      setUser({ email, password });
      return;
    }
    else {
      return "E-mail ou senha incorretos";
    }
  };


  const signout = () => {
    setUser(null); {/* remove o usuário */ }
    localStorage.removeItem("user_token"); {/* Remove o token de autenticação */ }
  };

  const home = (pedidoFeito) => {
    {/* Devo criar um vetor para seleção de itens do cardapio */ }
    setPedidos(pedidoFeito);

  }

  const carrinho = () => {
    {/* devo criar a variavel do valor do pedido mais frete */ }
    return pedidos;

  };

  {/*Retorna valores para aplicação*/ }
  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout, home, carrinho }}
    >
      {children}
    </AuthContext.Provider>
  ); {/*Retorna Usuario, Se logado, e as funções definidas */ }
};