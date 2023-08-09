import { Route, Routes } from 'react-router-dom';
import React from 'react';
import MyBoard from './pages/MyBoard';




export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyBoard />} />
      </Routes>
    </div>
  );
};
