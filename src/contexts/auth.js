import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => { {/*Pego a conta salva anteriormente, com o token autenticado*/}
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users.db");

        if(userToken && usersStorage){ {/*Se existe, percorre os usuários salvos e salva em hassUser*/}
            const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === JSON.parse(userToken).email);

        {/*Faço login com o usuário ja autenticado*/}
        if(hasUser) setUser(hasUser[0]);
        
        }
    },[]);

    const signin = (email, password) => {{/* Recebe email e senha como parametro */}
        const usersStorage = JSON.parse(localStorage.getItem("users_bd")); {/* Busca os dados salvos */}
    
        const hasUser = usersStorage?.filter((user) => user.email === email); {/* Procura a conta com o mesmo email */}
    
        if (hasUser?.length) {
          if (hasUser[0].email === email && hasUser[0].password === password) { {/* Se email e senha estiverem corretas */}
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ email, token })); {/* Token de autenticação gerado */}
            setUser({ email, password });
            return;
          } else {
            return "E-mail ou senha incorretos";
          }
        } else {
          return "Usuário não cadastrado";
        }
      };

      const signup = (email, password, cpf, nome, telefone, cep, rua, bairro, numero) => { {/* Parametros para criar conta */}
        const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || []; {/* Pega as contas salvas no banco de dados */}
      
        const hasUser = usersStorage.find((user) => user.email === email); {/* Verifica se o email ja existe */}
      
        if (hasUser) { {/* Se email ja existe */}
          return "Já tem uma conta com esse E-mail";
        }
      
        {/* Se não cria novo usuario */}
        const newUser = { email, password, cpf, nome, telefone, cep, rua, bairro, numero };
      
        usersStorage.push(newUser); {/* Adiciona no array de usuários */}
      
        {/* Salvo os dados no navegador com a chave users_db */}
        localStorage.setItem("users_bd", JSON.stringify(usersStorage)); 
      
        return;
      };
    
      const signout = () => { {/* Faz o Logout */}
        setUser(null); {/* remove o usuário */}
        localStorage.removeItem("user_token"); {/* Remove o token de autenticação */}
      };

      const home = (pedidoFeito) => {
        {/* Devo criar um vetor para seleção de itens do cardapio */}
        setPedidos(pedidoFeito);

      }

      const carrinho = () => {
        {/* devo criar a variavel do valor do pedido mais frete */}
        return pedidos;
        
      };

      {/*Retorna valores para aplicação*/}
      return ( 
        <AuthContext.Provider 
          value={{ user, signed: !!user, signin, signup, signout, home, carrinho}}
        >
          {children}
        </AuthContext.Provider>
      ); {/*Retorna Usuario, Se logado, e as funções definidas */}
};