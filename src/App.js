import "./App.css";
import { useState } from "react";
// import Product from "./components/Product";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (productInput) => {
    const filteredProducts = products.filter(
      (item) => item.name.toLowerCase() === productInput.toLowerCase()
    );
    setProducts(filteredProducts);
  };

  const handleClick = (productId) => {
    const findProduct = products.find((item) => item.id === productId);
    if (!currentSale.includes(findProduct)) {
      setCurrentSale([...currentSale, findProduct]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kenzie Burguer</h1>
      </header>
      <body>
        <main className="mainBox">
          <div className="mainBox__search">
            <input
              type="text"
              placeholder="Digite o produto desejado"
              value={filteredProducts}
              onChange={(event) => setFilteredProducts(event.target.value)}
            />
            <button onClick={() => showProducts(filteredProducts)}>
              Pesquisar
            </button>
          </div>
          <MenuContainer products={products} handleClick={handleClick} />
          <div className="mainBox__chart">
            <h2>Meu Carrinho:</h2>
            <ul>
              {currentSale.map((sale) => {
                return (
                  <div>
                    <li> {sale.name} </li>
                    <li> {sale.category} </li>
                    <li> R$ {sale.price} </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="mainBox__price">
            <h2>Preço total:</h2>
            R${" "}
            {currentSale.reduce((acc, item) => {
              let output = acc + item.price;
              return Math.round(output * 100) / 100;
            }, 0)}
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
