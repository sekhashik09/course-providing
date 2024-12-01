import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import Loader from './loader/Loader'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <MyFooter />
        </>
      )}
    </>
  );
}

export default App;
