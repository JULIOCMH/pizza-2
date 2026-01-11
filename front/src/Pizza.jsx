import React, { useEffect, useState } from 'react';

const Pizza = ({ id = 'p001' }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        console.log(data);
        setPizza(data);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la pizza');
      } finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, [id]);

  if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}>Cargando pizza...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red', padding: '20px' }}>{error}</p>;
  if (!pizza) return <p style={{ textAlign: 'center', padding: '20px' }}>Pizza no encontrada</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <img 
        src={pizza.img} 
        alt={pizza.name} 
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
      />
      
      <h1 style={{ textTransform: 'capitalize', marginBottom: '10px', color: 'black' }}>{pizza.name}</h1>
      
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff6b6b', marginBottom: '20px' }}>
        Precio: ${pizza.price.toLocaleString()}
      </p>
      
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
        {pizza.desc}
      </p>
      
      <h3 style={{ marginBottom: '10px' }}>Ingredientes:</h3>
      <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '20px' }}>
        {pizza.ingredients && pizza.ingredients.map((ingredient, idx) => (
          <li key={idx} style={{ padding: '8px 0', borderBottom: '1px solid #eee', textTransform: 'capitalize' }}>
            ✓ {ingredient}
          </li>
        ))}
      </ul>
      
      <button 
        disabled 
        style={{ 
          padding: '12px 24px', 
          fontSize: '16px',
          backgroundColor: '#cccccc',
          color: '#666',
          border: 'none',
          borderRadius: '4px',
          cursor: 'not-allowed',
          fontWeight: 'bold'
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
