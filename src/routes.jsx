import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Conteudos from "./pages/Conteudos";
import Jari from "./pages/Jari"
import Material from "./pages/Material"
import Codigos from "./pages/Codigos"
import Diligencias from "./pages/Diligencias";
import Tutoriais from "./pages/Tutoriais";
import Importante from "./pages/Importante"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/conteudos" element={<Conteudos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/jari" element={<Jari/>}></Route>
                <Route path="/material" element={<Material/>}></Route>
                <Route path="/codigos" element={<Codigos/>}></Route>
                <Route path="/diligencias" element={<Diligencias/>}></Route>
                <Route path="/tutoriais" element={<Tutoriais/>}></Route>
                <Route path="/importante" element={<Importante/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}
export default AppRoutes