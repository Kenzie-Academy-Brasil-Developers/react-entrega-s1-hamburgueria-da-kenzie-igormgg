import Product from "../Product";

const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="mainBox__menu">
      {products.map((product) => {
        return <Product products={product} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default MenuContainer;
