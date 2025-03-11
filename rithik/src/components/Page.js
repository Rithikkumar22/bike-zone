import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import '../style.css';

function Page() {
  return (
    <div className='container'>
      <div className='inner-container'>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
