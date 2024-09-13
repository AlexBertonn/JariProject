import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Conteudos from "./pages/Conteudos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/conteudos" element={<Conteudos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}
export default AppRoutes