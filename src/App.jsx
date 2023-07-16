import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, Checkout} from "./pages/index.pages";
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
            <Route path="/checkout" element={<Checkout sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />} />
          </Routes>
        </AuthProvider>
      </CarrosProvider>
    </BrowserRouter>  
  )
}


export default App