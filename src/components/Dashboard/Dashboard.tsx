import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';

function Dashboard({ toggleColorMode }: any) {
  return (
    <div>
      <Header toggleColorMode={toggleColorMode} />
      <h1>Dashboard</h1>
      <Footer />
    </div>
  );
}

export default Dashboard;
