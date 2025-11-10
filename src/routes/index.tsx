import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Trajetorias from "../pages/Trajetorias";
import TaskBoard from "../pages/TaskBoard";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projetos/trajetorias" element={<Trajetorias/>}/>
                <Route path="/projetos/taskboard" element={<TaskBoard/>}/>
            </Routes>
        </BrowserRouter>
    );
}