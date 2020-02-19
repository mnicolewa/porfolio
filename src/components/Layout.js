import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Helmet>
                <html lang="en" />
            </Helmet>

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </>
    );
}

export default Layout;