import React, { useState, useEffect } from 'react';
import { Input, Button, Space } from 'antd'; 
import Description from './components/Description';
import Products from './components/Products'; 
import Partners from './components/Partners';
import Footer from './components/Footer';
import Secundomer from './components/Secundomer';
import Counter from './components/Cunter'; 
import Registration from './components/Registration'; 
import './App.css';

const API_URL = 'http://localhost:3000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  // 1. Стейт для ID (изначально null)
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Загрузка данных
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Ошибка загрузки:", err));
  }, []);

  // 2. Функция PATCH для сохранения изменений
  const saveEdit = (id) => {
    // Используем конкатенацию через +, чтобы не было ошибок синтаксиса
    fetch(API_URL + "/" + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editText })
    })
    .then(res => res.json())
    .then(data => {
      setTasks(tasks.map(t => t.id === id ? data : t));
      setEditId(null); 
    })
    .catch(err => console.error("Ошибка PATCH:", err));
  };

  return (
    <div className="min-h-screen bg-white">
      <Description />
      
      <div style={{ padding: '40px 20px', maxWidth: '100%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Наши товары</h2>
        
        {/* ИСПРАВЛЕНО: Теперь карточки стоят строго в один ряд */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          gap: '20px', 
          overflowX: 'auto', 
          paddingBottom: '20px',
          justifyContent: 'center' // Центрируем ряд, если карточек мало
        }}>
          {tasks.map((task) => (
            <div key={task.id} style={{ minWidth: '280px', flex: '0 0 auto' }}>
              {/* 3. Условие: если editId равен ID задачи, рисуем инпут */}
              {editId === task.id ? (
                <div style={{ border: '2px solid #7a7aff', padding: '15px', borderRadius: '8px', background: '#f9f9f9', height: '100%' }}>
                  <Input 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} 
                    style={{ marginBottom: '10px' }}
                  />
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Button type="primary" block onClick={() => saveEdit(task.id)}>Подтвердить</Button>
                    <Button block onClick={() => setEditId(null)}>Отмена</Button>
                  </Space>
                </div>
              ) : (
                /* Отображаем карточку товара */
                <Products 
                  item={task} 
                  onEdit={() => {
                    setEditId(task.id);    
                    setEditText(task.title || task.name_product); 
                  }} 
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Secundomer />
      <Counter />
      <Registration />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;