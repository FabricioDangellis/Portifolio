import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter } from "react-router";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
