import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Trajetorias from "../pages/Trajetorias";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projetos/trajetorias" element={<Trajetorias/>}/>
            </Routes>
        </BrowserRouter>
    );
}