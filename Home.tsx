import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function Storefront() {
  const [cartCount, setCartCount] = useState<number>(0);

  const products: Product[] = [
    { id: '1', name: 'Traditional Panjabi', price: 2950, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Noise Cancelling Earbuds', price: 3499, image: 'https://via.placeholder.com/150' },
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '16px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>BazaarPulse</h2>
        <div>🛒 Cart ({cartCount})</div>
      </header>

      <main style={{ marginTop: '20px' }}>
        <h3>Featured Products</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {products.map(item => (
            <div key={item.id} style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px' }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '4px' }} />
              <h4>{item.name}</h4>
              <p>৳{item.price}</p>
              <button 
                onClick={addToCart}
                style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}