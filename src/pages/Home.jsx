import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { enrutadorApp } from "../routes/enrutador"; 

const Home = () => {
    const router = createBrowserRouter(enrutadorApp);
    return <RouterProvider router={router} />;
};

export default Home;



/* pages/Home.js
import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Bienvenido al Inicio</h2>
      <p>Selecciona una opción arriba para continuar.</p>
    </div>
  );
}

export default Home;*/
