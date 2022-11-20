import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Skills from "./components/Skills";


function App() {
  return (
    <div className=" bg-body  text-white w-full pt-10 px-16  sm:pt-0">
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/prfole" element={<Profile />}/>
        <Route path="products" element={<Products />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
