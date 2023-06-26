import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;

{/*Deixa toda aplicação com acesso aos valores de signin etc*/}