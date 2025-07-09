import React from 'react';

const Ex05Map = ({ item }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img src={item.imgSrc} alt={item.title} style={{ width: '100%', borderRadius: '4px' }} />
      <h2 style={{ marginTop: '16px' }}>{item.title} ({item.birthYear})</h2>
      <p style={{ color: '#555' }}>{item.content}</p>
      <a href={item.SNS} target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-block',
        marginTop: '12px',
        padding: '8px 16px',
        backgroundColor: '#007BFF',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>SNS Profile</a>
    </div>
  );
};

export default Ex05Map;