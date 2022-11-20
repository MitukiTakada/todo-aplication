import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="h-screen bg-body text-white">
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/prfole" element={<Profile />}/>
        <Route path="products" element={<Products />}/>
        <Route path="/skills" element={}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
