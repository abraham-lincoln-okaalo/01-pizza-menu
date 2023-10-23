import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: require("./pizzas/focaccia.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: require("./pizzas/margherita.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: require("./pizzas/spinaci.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: require("./pizzas/funghi.jpg"),
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: require("./pizzas/salamino.jpg"),
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: require("./pizzas/prosciutto.jpg"),
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "upperCase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>First Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
            {/* <Pizza
        name="pizza spinaci"
        ingredient="tomato, mozarella, spinach, and ricotta cheese"
        photoName={require("./pizzas/spinaci.jpg")}
        price={10}
      /> */}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  const hour = new Date().getHours();
  const openHours = 12;
  const closingHours = 22;
  const isOpen = hour >= openHours && hour <= closingHours;
  console.log(isOpen);
  console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHours={closingHours} openHours={openHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closingHours}
          :00
        </p>
      )}
    </footer>
  );
  // return React.createElement("Footer", null, "We're currently open!");
}

function Order({ closingHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00 to {closingHours}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
