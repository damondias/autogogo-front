import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./pages/index.pages";
import { AuthProvider } from "./contexts/authContext";
import Header from "./components/Header/HeaderComponent";
import { CarrosProvider } from "./contexts/CarrosContext";
import { useState } from "react";

function App() {
  const deleteCar = (info) => {
    console.log(info)
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <CarrosProvider>
        <AuthProvider>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route path="/cadastro" element={<SignUpPage/>} />
            <Route path="/login" element={<SignInPage/>} />
            <Route path="/" element={ <HomePage sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />} />
            {/* <Route path="/carrinho" element={<>Será a pagina de carrinhos dos serviços adquiridos</>} /> */}
            <Route path="/checkout" element={<>Será a pagina para finalizar as compras </>} />
          </Routes>
        </AuthProvider>
      </CarrosProvider>
    </BrowserRouter>  
  )
}


export default App