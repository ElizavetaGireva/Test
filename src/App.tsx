import React from 'react';
import Header from './components/Header';
import CatalogPage from './pages/CatalogPage';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '0px' }}>
                <CatalogPage />
            </main>
            <Footer />
        </>
    );
};

export default App;
