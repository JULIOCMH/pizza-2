import "./App.css";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./pages/profile.jsx";
import NotFound from "./pages/404.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route element={
        <>
      <Navbar />
      <Header />
      <Outlet />
       <Footer />
        </>
      }>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/Cart" element={<Cart></Cart>}></Route>
      <Route path="/Pizza/p001" element={<Pizza></Pizza>}></Route>
      <Route path="/Profile" element={<Profile></Profile>}></Route>
      </Route>
         <Route path="/404" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
