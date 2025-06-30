import Cart from "./components/Cart";
import Login from "./components/Login";
import Products from "./components/Products";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Whychoose from "./components/Whychoose";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products" element={<Products />} />
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/whychoose" element={<Whychoose />} />
    <Route path="/not-found" element={<Notfound />} />
    <Route path="*" element={<Notfound />} />
  </Routes>
);

export default App;
