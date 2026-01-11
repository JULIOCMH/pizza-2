import "./App.css";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import RegisterPage from "./RegisterPage.jsx";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import Pizza from "./Pizza.jsx"


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Home />
    <Pizza/>  
      {/*
        <Cart />
     <RegisterPage/>
      <Login/>
       <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        <Card
          imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
          titulo="Pizza Napolitana"
          ingredientes="Mozarella, tomates, jamon, oregano."
          precio={5950}
        ></Card>
        <Card
          imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
          titulo="Pizza Española"
          ingredientes="Mozarella, gongozola, parmezano, provolone."
          precio={6950}
        ></Card>
        <Card
          imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
          titulo="Pizza Pepperoni"
          ingredientes="Mozarella, pepperoni, oregano."
          precio={6950}
        ></Card>
      </div> 
      <Footer /> */}
    </>
  );
}

export default App;
