import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";



const Signup = () => {
  const bairrosPreSelecionados = ["Lagoa", "Pampulha", "Centro"];
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");

  const handleBairroChange = (e) => {
    setBairro(e.target.value);
    setError("");
  }
  const [numero, setNumero] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha | !cpf | !nome | !telefone | !cep | !rua | !bairro | !numero) {
      setError("Preencha todos os campos"); {/* Se algum campo não for preenchido */}
      return;
    } else if (email !== emailConf) { {/* Se email for diferente */}
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha, cpf, nome, telefone, cep, rua, bairro, numero);

    if (res) { {/* Se res retorna algo é pq deu erro */}
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/"); {/* Vai para Signin */}
  };

  {/* Cofiguração da página */}
  return (
    <C.Container>
      <C.Label>CADASTRO DA PIZZARIA</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        <Input
          type="cpf"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => [setCpf(e.target.value), setError("")]}
        />
        <Input
          type="nome"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="telefone"
          placeholder="Digite seu Telefone"
          value={telefone}
          onChange={(e) => [setTelefone(e.target.value), setError("")]}
        />
        <Input
          type="cep"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => [setCep(e.target.value), setError("")]}
        />
        <Input
          type="rua"
          placeholder="Digite sua Rua"
          value={rua}
          onChange={(e) => [setRua(e.target.value), setError("")]}
        />

      <C.Select value={bairro} onChange={handleBairroChange}>
        <option value="">Selecione um bairro</option>
        {bairrosPreSelecionados.map((bairro) => (
          <option key={bairro} value={bairro}>
            {bairro}
          </option>
        ))}
      </C.Select>
        <Input
          type="numero"
          placeholder="Digite o Numero de sua Casa/AP"
          value={numero}
          onChange={(e) => [setNumero(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastre-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;