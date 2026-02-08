import React from 'react';
import { Card, Button } from 'antd';

const ProductCard = ({ product, onEdit }) => {

  if (!product) return null;

  return (
    <Card
      hoverable
      className="product-card"
      style={{ marginBottom: '20px' }}
      cover={
        <div style={{ background: '#f5f5f5', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{color: '#ccc'}}>Фото товара</span>
        </div>
      }
    >
  
      <h3 className="product-title">{product.title || product.name_product}</h3>
      <p>Цена: <b style={{color: '#7a7aff'}}>{product.price}</b></p>
      <p style={{fontSize: '12px', color: '#999'}}>ID: {product.id}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Button type="primary" style={{ backgroundColor: '#7a7aff' }}>
          Купить
        </Button>
       
        <Button onClick={onEdit}>
          Изменить
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;