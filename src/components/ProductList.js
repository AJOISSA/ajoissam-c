import React from 'react';

const products = [
  { id: 1, name: "Auto 1", description: "Esimerkkikuvaus", price: "1000€" },
  { id: 2, name: "Purkuosa 1", description: "Esimerkkiosa", price: "100€" },
];

const ProductList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {products.map(product => (
      <div key={product.id} className="border border-gray-700 p-4">
        <h3 className="text-lg">{product.name}</h3>
        <p>{product.description}</p>
        <p className="text-red-600">{product.price}</p>
        <button className="mt-2 bg-red-600 px-3 py-1 rounded">Kysy lisätietoa</button>
      </div>
    ))}
  </div>
);

export default ProductList;
