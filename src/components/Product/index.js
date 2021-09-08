const Product = ({ products, handleClick }) => {
  return (
    <div>
      <ul>
        <li> {products.name} </li>
        <li> Categoria: {products.category} </li>
        <li> Preço: R$ {products.price} </li>
        <button onClick={() => handleClick(products.id)}>
          Adicionar ao Carrinho
        </button>
      </ul>
    </div>
  );
};

export default Product;
