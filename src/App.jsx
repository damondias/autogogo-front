import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./pages/index.pages";
import { AuthProvider } from "./contexts/authContext";
import Header from "./components/Header/HeaderComponent";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/cadastro" element={<SignUpPage/>} />
          <Route path="/login" element={<SignInPage/>} />
          <Route path="/" element={ <HomePage />} />
          <Route path="/carrinho" element={<>Será a pagina de carrinhos dos serviços adquiridos</>} />
          <Route path="/checkout" element={<>Será a pagina para finalizar as compras </>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>  
  )
}

export default App
