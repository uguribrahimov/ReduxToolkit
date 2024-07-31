import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search products"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default ProductList;
