import React, {Fragment} from 'react';

import Header from './Header';
import Footer from './Footer';

const Index = ({children}) => (
    <Fragment>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </Fragment>
);

export default Index;
