// src/components/ProductList.js

import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
