import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/index.pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<>pagina de cadastro</>} />
        <Route path="/login" element={<>pagina de login</>} />
        <Route path="/" element={ <HomePage />} />
        <Route path="/carrinho" element={<>Será a pagina de carrinhos dos serviços adquiridos</>} />
        <Route path="/checkout" element={<>Será a pagina para finalizar as compras </>} />
      </Routes>
  </BrowserRouter>  
  )
}

export default App
