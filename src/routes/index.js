import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Carrinho from "../pages/Carrinho";
import useAuth from "../hook/useAuth";

const Private = ({ Item }) => {
const {signed} = useAuth();{/* Pega do contexto se o usuario ta autenticado ou não */}

    return signed > 0 ? <Item /> : <Signin />
}; {/*Verifico se estar logado, se não estiver vai para tela de login*/}

const RoutesApp = () => {
    return (
        <BrowserRouter>
           <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />}/> {/* Privado para Home*/}
                    <Route path="/" element={<Signin />}/> {/* Rota para Signin*/}
                    <Route exact path="/signup" element={<Signup />} /> {/* Rota para Signup*/}
                    <Route exact path="/carrinho" element={<Carrinho />} /> {/* Rota para Carrinho*/}
                    <Route path="*" element={<Signin />} /> {/* Quando o usuario acessar outra rota, ser direcionado para Singin*/}
                </Routes>
           </Fragment> 
        </BrowserRouter>
    );
};

export default RoutesApp;